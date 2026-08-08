package com.devportfolio.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.ExperienceRequest;
import com.devportfolio.dto.ExperienceResponse;
import com.devportfolio.service.ExperienceService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/experiences")
public class ExperienceController {

    private ExperienceService experienceService;

    public ExperienceController(ExperienceService experienceService) {
        this.experienceService = experienceService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ExperienceResponse>> addExperience(
            @Valid @RequestBody ExperienceRequest request) {

        return new ResponseEntity<>(
                experienceService.addExperience(request),
                HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<ExperienceResponse>>> getExperiences() {

        return ResponseEntity.ok(
                experienceService.getExperiences());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<ExperienceResponse>> updateExperience(
            @PathVariable Long id,
            @Valid @RequestBody ExperienceRequest request) {

        return ResponseEntity.ok(
                experienceService.updateExperience(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteExperience(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                experienceService.deleteExperience(id));
    }
}