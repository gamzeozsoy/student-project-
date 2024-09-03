package com.example.studentproject.studentproject.controller;

import com.example.studentproject.studentproject.dto.RequestDto;
import com.example.studentproject.studentproject.entity.Student;
import com.example.studentproject.studentproject.repository.StudentRepository;
import com.example.studentproject.studentproject.service.FilterSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students/filter")
public class FilterController {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private FilterSpecification<Student> studentFilterSpecification;

    @GetMapping("/byName/{name}")
    public List<Student> getStdByName(@PathVariable(name = "name") String name) {
        return studentRepository.findByNameIgnoreCase(name);
    }

    @GetMapping("/bySurname/{surname}")
    public List<Student> getStdBySurname(@PathVariable(name = "surname") String surname) {
        return studentRepository.findBySurnameIgnoreCase(surname);
    }

    @GetMapping("/byAge/{age}")
    public List<Student> getStdByAge(@PathVariable(name = "age") int age) {
        return studentRepository.findByAge(age);
    }

    @GetMapping("/byEmail/{email}")
    public List<Student> getStdByEmail(@PathVariable(name = "email") String email) {
        return studentRepository.findByEmailIgnoreCase(email);
    }

    @GetMapping("/byJob/{job}")
    public List<Student> getStdByJob(@PathVariable(name = "job") String job) {
        return studentRepository.findByJobIgnoreCase(job);
    }

    @GetMapping("/byId/{id}")
    public Student getStdById(@PathVariable(name = "id") Long id) {
        return studentRepository.findById(id).orElse(null);
    }

//    @PostMapping("/specification")
//    public List<Student> getStudents() {
//
//        Specification<Student> specification = new Specification<Student>() {
//            @Override
//            public Predicate toPredicate(Root<Student> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
//                return criteriaBuilder.equal(root.get("id"), "19");
//            }
//        };
//
//        List<Student> all = studentRepository.findAll(specification);
//        return all;
//    }

    @PostMapping("/specification")
    public List<Student> getStudents(@RequestBody RequestDto requestDto) {
        Specification<Student> searchSpecification = studentFilterSpecification.getSearchSpecification(requestDto.getSearchRequestDTO(), requestDto.getGlobalOperator());
        return studentRepository.findAll(searchSpecification);
    }




}
