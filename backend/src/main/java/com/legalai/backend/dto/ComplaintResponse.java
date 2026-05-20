package com.legalai.backend.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class ComplaintResponse {

    private Long id;

    private String complaintText;

    private String category;

    private String department;

    private String urgency;

    private Double urgencyScore;

    private LocalDateTime createdAt;
}
