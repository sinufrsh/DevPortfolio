package com.devportfolio.service.impl;

import java.util.ArrayList;
import com.devportfolio.service.ActivityService;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.EducationRequest;
import com.devportfolio.dto.EducationResponse;
import com.devportfolio.entity.Education;
import com.devportfolio.entity.Portfolio;
import com.devportfolio.entity.User;
import com.devportfolio.repository.EducationRepository;
import com.devportfolio.repository.PortfolioRepository;
import com.devportfolio.service.CurrentUserService;
import com.devportfolio.service.EducationService;

@Service
public class EducationServiceImpl implements EducationService {

    private EducationRepository educationRepository;
    private PortfolioRepository portfolioRepository;
    private CurrentUserService currentUserService;
    private ActivityService activityService;

    public EducationServiceImpl(
            EducationRepository educationRepository,
            PortfolioRepository portfolioRepository,
            CurrentUserService currentUserService,ActivityService activityService) {

        this.educationRepository = educationRepository;
        this.portfolioRepository = portfolioRepository;
        this.currentUserService = currentUserService;
        this.activityService=activityService;
    }

    @Override
    public ApiResponse<EducationResponse> addEducation(EducationRequest request) {

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

        Education education = new Education();

        education.setInstitutionName(request.getInstitutionName());
        education.setDegree(request.getDegree());
        education.setFieldOfStudy(request.getFieldOfStudy());
        education.setStartYear(request.getStartYear());
        education.setEndYear(request.getEndYear());
        education.setGrade(request.getGrade());
        education.setDescription(request.getDescription());
        education.setPortfolio(portfolio);

        Education savedEducation = educationRepository.save(education);
        activityService.saveActivity(
                portfolio,
                "Added Education: " + savedEducation.getDegree()
        );

        EducationResponse response = new EducationResponse();

        response.setId(savedEducation.getId());
        response.setInstitutionName(savedEducation.getInstitutionName());
        response.setDegree(savedEducation.getDegree());
        response.setFieldOfStudy(savedEducation.getFieldOfStudy());
        response.setStartYear(savedEducation.getStartYear());
        response.setEndYear(savedEducation.getEndYear());
        response.setGrade(savedEducation.getGrade());
        response.setDescription(savedEducation.getDescription());

        return new ApiResponse<>(
                true,
                "Education added successfully",
                response
        );
    }

    @Override
    public ApiResponse<List<EducationResponse>> getEducations() {

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

        List<Education> educations =
                educationRepository.findByPortfolio(portfolio);

        List<EducationResponse> responseList = new ArrayList<>();

        for (Education education : educations) {

            EducationResponse response = new EducationResponse();

            response.setId(education.getId());
            response.setInstitutionName(education.getInstitutionName());
            response.setDegree(education.getDegree());
            response.setFieldOfStudy(education.getFieldOfStudy());
            response.setStartYear(education.getStartYear());
            response.setEndYear(education.getEndYear());
            response.setGrade(education.getGrade());
            response.setDescription(education.getDescription());

            responseList.add(response);
        }

        return new ApiResponse<>(
                true,
                "Educations fetched successfully",
                responseList
        );
    }

    @Override
    public ApiResponse<EducationResponse> updateEducation(Long id,
                                                          EducationRequest request) {

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

        Education education = educationRepository
                .findByIdAndPortfolio(id, portfolio)
                .orElseThrow(() -> new RuntimeException("Education not found"));

        education.setInstitutionName(request.getInstitutionName());
        education.setDegree(request.getDegree());
        education.setFieldOfStudy(request.getFieldOfStudy());
        education.setStartYear(request.getStartYear());
        education.setEndYear(request.getEndYear());
        education.setGrade(request.getGrade());
        education.setDescription(request.getDescription());

        Education updatedEducation = educationRepository.save(education);
        activityService.saveActivity(
                portfolio,
                "Updated Education: " + updatedEducation.getDegree()
        );

        EducationResponse response = new EducationResponse();

        response.setId(updatedEducation.getId());
        response.setInstitutionName(updatedEducation.getInstitutionName());
        response.setDegree(updatedEducation.getDegree());
        response.setFieldOfStudy(updatedEducation.getFieldOfStudy());
        response.setStartYear(updatedEducation.getStartYear());
        response.setEndYear(updatedEducation.getEndYear());
        response.setGrade(updatedEducation.getGrade());
        response.setDescription(updatedEducation.getDescription());

        return new ApiResponse<>(
                true,
                "Education updated successfully",
                response
        );
    }

    @Override
    public ApiResponse<Void> deleteEducation(Long id) {

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
        Education education = educationRepository
                .findByIdAndPortfolio(id, portfolio)
                .orElseThrow(() -> new RuntimeException("Education not found"));

        String degree = education.getDegree();

        educationRepository.delete(education);

        activityService.saveActivity(
                portfolio,
                "Deleted Education: " + degree
        );

        return new ApiResponse<>(
                true,
                "Education deleted successfully",
                null
        );
    }
}