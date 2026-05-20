package com.legalai.backend.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class AuthResponse {

    private String anonymousId;

    private String token;

    private String message;
}