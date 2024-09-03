package com.example.studentproject.studentproject.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.expression.Operation;

@Getter
@Setter
public class SearchRequestDTO {

    String column;
    String value;
    Operation operation;


    public enum Operation {
        EQUAL,
        LIKE,
        IN,
        GREATER_THAN,
        LESS_THAN,
        BETWEEN,
        JOIN;


    }
}



