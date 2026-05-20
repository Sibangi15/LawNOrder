package com.legalai.backend.service;

import com.legalai.backend.dto.AiResponse;
import com.legalai.backend.dto.ComplaintRequest;
import com.legalai.backend.dto.ComplaintResponse;
import com.legalai.backend.entity.Complaint;
import com.legalai.backend.entity.User;
import com.legalai.backend.exception.ResourceNotFoundException;
import com.legalai.backend.repository.ComplaintRepository;
import com.legalai.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ComplaintService {

    private final ComplaintRepository complaintRepository;

    private final UserRepository userRepository;

    private final AiService aiService;

    public ComplaintResponse submitComplaint(
            ComplaintRequest request,
            Authentication authentication
    ) {

        String anonymousId = authentication.getName();

        User user = userRepository.findByAnonymousId(anonymousId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found")
                );

        AiResponse aiResponse =
                aiService.analyzeComplaint(
                        request.getComplaintText()
                );

        Complaint complaint = Complaint.builder()

                .complaintText(request.getComplaintText())

                .category(aiResponse.getCategory())

                .department(aiResponse.getDepartment())

                .urgency(aiResponse.getUrgency())

                .urgencyScore(aiResponse.getScore())

                .createdAt(LocalDateTime.now())

                .user(user)

                .build();

        Complaint savedComplaint =
                complaintRepository.save(complaint);

        return mapToResponse(savedComplaint);
    }

    public List<ComplaintResponse> getUserComplaints(
            Authentication authentication
    ) {

        String anonymousId = authentication.getName();

        User user = userRepository.findByAnonymousId(anonymousId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found")
                );

        return complaintRepository.findByUser(user)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    private ComplaintResponse mapToResponse(
            Complaint complaint
    ) {

        return ComplaintResponse.builder()

                .id(complaint.getId())

                .complaintText(complaint.getComplaintText())

                .category(complaint.getCategory())

                .department(complaint.getDepartment())

                .urgency(complaint.getUrgency())

                .urgencyScore(complaint.getUrgencyScore())

                .createdAt(complaint.getCreatedAt())

                .build();
    }
}
