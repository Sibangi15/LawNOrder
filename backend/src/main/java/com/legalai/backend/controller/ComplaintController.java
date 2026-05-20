package com.legalai.backend.controller;

import com.legalai.backend.dto.ComplaintRequest;
import com.legalai.backend.dto.ComplaintResponse;
import com.legalai.backend.service.ComplaintService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/complaints")
@RequiredArgsConstructor
public class ComplaintController {

    private final ComplaintService complaintService;

    @PostMapping
    public ComplaintResponse submitComplaint(
            @Valid @RequestBody ComplaintRequest request,
            Authentication authentication
    ) {

        return complaintService.submitComplaint(
                request,
                authentication
        );
    }

    @GetMapping("/history")
    public List<ComplaintResponse> getHistory(
            Authentication authentication
    ) {

        return complaintService.getUserComplaints(
                authentication
        );
    }
}