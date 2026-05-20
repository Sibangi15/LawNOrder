package com.legalai.backend.service;

import com.legalai.backend.dto.AiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class AiService {

    private final WebClient webClient;

    @Value("${ai.model.url}")
    private String aiModelUrl;

    public AiResponse analyzeComplaint(String complaintText) {


//        return webClient.post()
//                .uri(aiModelUrl)
//
//                .bodyValue(
//                        Map.of("text", complaintText)
//                )
//
//                .retrieve()
//
//                .bodyToMono(AiResponse.class)
//
//                .block();


        AiResponse response = new AiResponse();

        response.setCategory("Housing Fraud");

        response.setDepartment("Consumer Affairs");

        response.setUrgency("Medium");

        response.setScore(0.82);

        return response;


    }
}