package com.legalai.backend.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class ErrorResponse {

    private int status;

    private String error;

    private LocalDateTime timestamp;
}