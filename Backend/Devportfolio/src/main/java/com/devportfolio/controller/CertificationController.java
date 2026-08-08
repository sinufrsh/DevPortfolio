package com.devportfolio.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.CertificationRequest;
import com.devportfolio.dto.CertificationResponse;
import com.devportfolio.service.CertificationService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/certifications")
public class CertificationController {

    private CertificationService certificationService;

    public CertificationController(
            CertificationService certificationService) {

        this.certificationService = certificationService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<CertificationResponse>> addCertification(
            @Valid @RequestBody CertificationRequest request) {

        return new ResponseEntity<>(
                certificationService.addCertification(request),
                HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<CertificationResponse>>> getCertifications() {

        return ResponseEntity.ok(
                certificationService.getCertifications());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<CertificationResponse>> updateCertification(
            @PathVariable Long id,
            @Valid @RequestBody CertificationRequest request) {

        return ResponseEntity.ok(
                certificationService.updateCertification(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteCertification(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                certificationService.deleteCertification(id));
    }
}