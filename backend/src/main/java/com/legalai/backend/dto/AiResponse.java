package com.legalai.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AiResponse {

    private String category;

    private String department;

    private String urgency;

    private Double score;
}
