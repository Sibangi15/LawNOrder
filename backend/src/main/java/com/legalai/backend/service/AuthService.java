package com.legalai.backend.service;

import com.legalai.backend.dto.LoginRequest;
import com.legalai.backend.dto.SignupRequest;
import com.legalai.backend.entity.User;
import com.legalai.backend.exception.BadRequestException;
import com.legalai.backend.repository.UserRepository;
import com.legalai.backend.util.UserIdGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    public String signup(SignupRequest request) {

        if (!request.getPassword().equals(request.getConfirmPassword())) {

            throw new BadRequestException("Passwords do not match");
        }

        String anonymousId = UserIdGenerator.generateAnonymousId();

        User user = User.builder()
                .anonymousId(anonymousId)
                .passwordHash(passwordEncoder.encode(request.getPassword()))
                .role("USER")
                .createdAt(LocalDateTime.now())
                .build();

        userRepository.save(user);

        return anonymousId;
    }

    public String login(LoginRequest request) {

        User user = userRepository.findByAnonymousId(request.getAnonymousId())
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPasswordHash())) {

            throw new BadRequestException("Invalid credentials");
        }

        return jwtService.generateToken(user.getAnonymousId());
    }
}