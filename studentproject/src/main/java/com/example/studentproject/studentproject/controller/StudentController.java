package com.example.studentproject.studentproject.controller;

import com.example.studentproject.studentproject.dto.StudentDTO;
import com.example.studentproject.studentproject.dto.StudentResponseDTO;
import com.example.studentproject.studentproject.entity.Student;
import com.example.studentproject.studentproject.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")

public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/add")
    public StudentResponseDTO addStudent(@RequestBody @Valid StudentDTO studentDTO) {
        return studentService.saveStudent(studentDTO);
    }

    @GetMapping("/list")
    public List<Student> getAllStudents() {
        return studentService.findAllStudents();
    }

    @GetMapping("/byId/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Student student = studentService.getStudentById(id);
        if (student != null) {
            return ResponseEntity.ok(student);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable Long id) {
        try {
            studentService.deleteStudentById(id);
            return ResponseEntity.ok("Student with ID " + id + " deleted successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error while deleting student by ID:" + id);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<StudentResponseDTO> updateStudent(@PathVariable Long id, @RequestBody @Valid StudentDTO studentDTO) {
        try {
            StudentResponseDTO updatedStudent = studentService.updateStudentService(id, studentDTO);
            return ResponseEntity.ok(updatedStudent);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }


}
