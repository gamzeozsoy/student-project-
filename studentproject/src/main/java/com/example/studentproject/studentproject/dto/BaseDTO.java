package com.example.studentproject.studentproject.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public abstract class BaseDTO {

    private Long id;
//    private LocalDateTime createdDate;//ENTİTYNİN oluşturulduğu tarih ve saat bilgisini tutar
//    private LocalDateTime updatedDate;//ENTİTYNİN en son ne zaman güncellendiğini tutar.


}
