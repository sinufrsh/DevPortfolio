package com.devportfolio.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.CertificationRequest;
import com.devportfolio.dto.CertificationResponse;
import com.devportfolio.entity.Certification;
import com.devportfolio.entity.Portfolio;
import com.devportfolio.entity.User;
import com.devportfolio.repository.CertificationRepository;
import com.devportfolio.repository.PortfolioRepository;
import com.devportfolio.service.ActivityService;
import com.devportfolio.service.CertificationService;
import com.devportfolio.service.CurrentUserService;

@Service
public class CertificationServiceImpl implements CertificationService {

    private CertificationRepository certificationRepository;
    private PortfolioRepository portfolioRepository;
    private CurrentUserService currentUserService;
    private ActivityService activityService;

    public CertificationServiceImpl(
            CertificationRepository certificationRepository,
            PortfolioRepository portfolioRepository,
            CurrentUserService currentUserService,ActivityService activityService) {

        this.certificationRepository = certificationRepository;
        this.portfolioRepository = portfolioRepository;
        this.currentUserService = currentUserService;
        this.activityService=activityService;
    }

    @Override
    public ApiResponse<CertificationResponse> addCertification(
            CertificationRequest request) {

        User user = currentUserService.getCurrentUser();

        Optional<Portfolio> optionalPortfolio =
                portfolioRepository.findByUser(user);

        if (optionalPortfolio.isEmpty()) {

            return new ApiResponse<>(
                    false,
                    "Portfolio not found",
                    null
            );
        }

        Portfolio portfolio = optionalPortfolio.get();
        Certification certification = new Certification();

        certification.setCertificateName(request.getCertificateName());
        certification.setOrganization(request.getOrganization());
        certification.setIssueDate(request.getIssueDate());
        certification.setCredentialUrl(request.getCredentialUrl());
        certification.setPortfolio(portfolio);

        Certification savedCertification =
                certificationRepository.save(certification);
        activityService.saveActivity(
                portfolio,
                "Added Certification: " + savedCertification.getCertificateName()
        );

        CertificationResponse response =
                new CertificationResponse();

        response.setId(savedCertification.getId());
        response.setCertificateName(savedCertification.getCertificateName());
        response.setOrganization(savedCertification.getOrganization());
        response.setIssueDate(savedCertification.getIssueDate());
        response.setCredentialUrl(savedCertification.getCredentialUrl());

        return new ApiResponse<>(
                true,
                "Certification added successfully",
                response);
    }

    @Override
    public ApiResponse<List<CertificationResponse>> getCertifications() {

        User user = currentUserService.getCurrentUser();

        Optional<Portfolio> optionalPortfolio =
                portfolioRepository.findByUser(user);

        if (optionalPortfolio.isEmpty()) {

            return new ApiResponse<>(
                    false,
                    "Portfolio not found",
                    null
            );
        }

        Portfolio portfolio = optionalPortfolio.get();

        List<Certification> certifications =
                certificationRepository.findByPortfolio(portfolio);

        List<CertificationResponse> responseList =
                new ArrayList<>();

        for (Certification certification : certifications) {

            CertificationResponse response =
                    new CertificationResponse();

            response.setId(certification.getId());
            response.setCertificateName(certification.getCertificateName());
            response.setOrganization(certification.getOrganization());
            response.setIssueDate(certification.getIssueDate());
            response.setCredentialUrl(certification.getCredentialUrl());

            responseList.add(response);
        }

        return new ApiResponse<>(
                true,
                "Certifications fetched successfully",
                responseList);
    }

    @Override
    public ApiResponse<CertificationResponse> updateCertification(
            Long id,
            CertificationRequest request) {

        User user = currentUserService.getCurrentUser();

        Optional<Portfolio> optionalPortfolio =
                portfolioRepository.findByUser(user);

        if (optionalPortfolio.isEmpty()) {

            return new ApiResponse<>(
                    false,
                    "Portfolio not found",
                    null
            );
        }

        Portfolio portfolio = optionalPortfolio.get();

        Certification certification =
                certificationRepository
                        .findByIdAndPortfolio(id, portfolio)
                        .orElseThrow(() ->
                                new RuntimeException("Certification not found"));

        certification.setCertificateName(request.getCertificateName());
        certification.setOrganization(request.getOrganization());
        certification.setIssueDate(request.getIssueDate());
        certification.setCredentialUrl(request.getCredentialUrl());

        Certification updatedCertification =
                certificationRepository.save(certification);
        
        activityService.saveActivity(
                portfolio,
                "Updated Certification: " + updatedCertification.getCertificateName()
        );

        CertificationResponse response =
                new CertificationResponse();

        response.setId(updatedCertification.getId());
        response.setCertificateName(updatedCertification.getCertificateName());
        response.setOrganization(updatedCertification.getOrganization());
        response.setIssueDate(updatedCertification.getIssueDate());
        response.setCredentialUrl(updatedCertification.getCredentialUrl());

        return new ApiResponse<>(
                true,
                "Certification updated successfully",
                response);
    }

    @Override
    public ApiResponse<Void> deleteCertification(Long id) {

        User user = currentUserService.getCurrentUser();

        Optional<Portfolio> optionalPortfolio =
                portfolioRepository.findByUser(user);

        if (optionalPortfolio.isEmpty()) {

            return new ApiResponse<>(
                    false,
                    "Portfolio not found",
                    null
            );
        }

        Portfolio portfolio = optionalPortfolio.get();

        Certification certification =
                certificationRepository
                        .findByIdAndPortfolio(id, portfolio)
                        .orElseThrow(() ->
                                new RuntimeException("Certification not found"));

        String certificateName = certification.getCertificateName();

        certificationRepository.delete(certification);

        activityService.saveActivity(
                portfolio,
                "Deleted Certification: " + certificateName
        );

        return new ApiResponse<>(
                true,
                "Certification deleted successfully",
                null);
    }
}