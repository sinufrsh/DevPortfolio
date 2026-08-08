package com.devportfolio.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.EducationRequest;
import com.devportfolio.dto.EducationResponse;
import com.devportfolio.service.EducationService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/educations")
public class EducationController {

    private EducationService educationService;

    public EducationController(EducationService educationService) {
        this.educationService = educationService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<EducationResponse>> addEducation(
            @Valid @RequestBody EducationRequest request) {

        return new ResponseEntity<>(
                educationService.addEducation(request),
                HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<EducationResponse>>> getEducations() {

        return ResponseEntity.ok(
                educationService.getEducations());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<EducationResponse>> updateEducation(
            @PathVariable Long id,
            @Valid @RequestBody EducationRequest request) {

        return ResponseEntity.ok(
                educationService.updateEducation(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteEducation(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                educationService.deleteEducation(id));
    }
}