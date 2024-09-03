package com.example.studentproject.studentproject.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class RequestDto {

    private List<SearchRequestDTO> searchRequestDTO;
    private  GlobalOperator globalOperator;


    public enum GlobalOperator{
        AND,OR;
    }


}

