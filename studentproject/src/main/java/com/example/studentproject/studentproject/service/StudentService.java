package com.example.studentproject.studentproject.service;

import com.example.studentproject.studentproject.dto.StudentDTO;
import com.example.studentproject.studentproject.dto.StudentResponseDTO;
import com.example.studentproject.studentproject.entity.Student;
import com.example.studentproject.studentproject.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public boolean validateStudent(String email, String password) {
        Optional<Student> optionalStudent = studentRepository.findByEmailAndPassword(email, password);
        return optionalStudent.isPresent() && optionalStudent.get().getPassword().equals(password);
    }

    public StudentResponseDTO saveStudent(StudentDTO studentDTO) {
        Student student = convertDTOtoStudent(studentDTO);
        Student savedStudent = studentRepository.save(student);

        StudentResponseDTO responseDTO = new StudentResponseDTO();
        responseDTO.setMessage("Student with ID " + savedStudent.getId() + " saved successfully.");
        return responseDTO;
    }

    private static Student convertDTOtoStudent(StudentDTO studentDTO) {
        Student student = new Student();
        student.setName(studentDTO.getName());
        student.setSurname(studentDTO.getSurname());
        student.setJob(studentDTO.getJob());
        student.setEmail(studentDTO.getEmail());
        student.setAge(studentDTO.getAge());
        student.setPassword(studentDTO.getPassword());
        return student;
    }

    public void deleteStudentById(Long id) {
        studentRepository.deleteById(id);
    }

    public Student getStudentById(Long id) {
        Optional<Student> studentOptional = studentRepository.findById(id);
        return studentOptional.orElse(null);
    }

    public List<Student> findAllStudents() {
        return studentRepository.findAll();
    }

    public StudentResponseDTO updateStudentService(Long id, StudentDTO studentDTO) {
        Optional<Student> optionalStudent = studentRepository.findById(id);

        if (optionalStudent.isPresent()) {
            Student student = optionalStudent.get();

            // Update student entity with data from DTO
            student.setName(studentDTO.getName());
            student.setSurname(studentDTO.getSurname());
            student.setEmail(studentDTO.getEmail());
            student.setAge(studentDTO.getAge());
            student.setJob(studentDTO.getJob());
            student.setPassword(studentDTO.getPassword());

            // Save updated student entity
            studentRepository.save(student);

            // Prepare response DTO
            StudentResponseDTO responseDTO = new StudentResponseDTO();
            responseDTO.setMessage("Student with ID " + student.getId() + " updated successfully.");
            return responseDTO;
        } else {
            throw new RuntimeException("Student not found with ID: " + id);
        }
    }
}
