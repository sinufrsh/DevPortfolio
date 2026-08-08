package com.devportfolio.service;

import java.util.List;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.CertificationRequest;
import com.devportfolio.dto.CertificationResponse;

public interface CertificationService {

    ApiResponse<CertificationResponse> addCertification(
            CertificationRequest request);

    ApiResponse<List<CertificationResponse>> getCertifications();

    ApiResponse<CertificationResponse> updateCertification(
            Long id,
            CertificationRequest request);

    ApiResponse<Void> deleteCertification(Long id);

}