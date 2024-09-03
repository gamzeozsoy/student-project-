package com.example.studentproject.studentproject.controller;

import com.example.studentproject.studentproject.dto.LoginRequestDTO;
import com.example.studentproject.studentproject.entity.Student;
import com.example.studentproject.studentproject.repository.StudentRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/students")
public class LoginController {

    private final StudentRepository studentRepository;

    @Autowired
    public LoginController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody @Valid LoginRequestDTO loginRequestDTO) {
        Optional<Student> optionalStudent = studentRepository.findByEmailAndPassword(loginRequestDTO.getEmail(), loginRequestDTO.getPassword());
        if (optionalStudent.isPresent()) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
        }
    }

    @GetMapping("/admin")
    public ResponseEntity<String> adminAccess() {
        //burada gerekli yetki kontrolü yapılabilir
        return ResponseEntity.ok("Admin access granted");
    }
}
