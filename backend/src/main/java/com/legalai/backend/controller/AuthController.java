package com.legalai.backend.controller;

import com.legalai.backend.dto.AuthResponse;
import com.legalai.backend.dto.LoginRequest;
import com.legalai.backend.dto.SignupRequest;
import com.legalai.backend.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public AuthResponse signup(
            @Valid @RequestBody SignupRequest request
    ) {

        String anonymousId =
                authService.signup(request);

        return AuthResponse.builder()

                .anonymousId(anonymousId)

                .message("User registered successfully")

                .build();
    }

    @PostMapping("/login")
    public AuthResponse login(
            @Valid @RequestBody LoginRequest request
    ) {

        String token =
                authService.login(request);

        return AuthResponse.builder()

                .token(token)

                .message("Login successful")

                .build();
    }
}