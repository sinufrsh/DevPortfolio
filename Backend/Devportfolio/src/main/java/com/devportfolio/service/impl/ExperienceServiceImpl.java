package com.devportfolio.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.ExperienceRequest;
import com.devportfolio.dto.ExperienceResponse;
import com.devportfolio.entity.Experience;
import com.devportfolio.entity.Portfolio;
import com.devportfolio.entity.User;
import com.devportfolio.repository.ExperienceRepository;
import com.devportfolio.repository.PortfolioRepository;
import com.devportfolio.service.ActivityService;
import com.devportfolio.service.CurrentUserService;
import com.devportfolio.service.ExperienceService;

@Service
public class ExperienceServiceImpl implements ExperienceService {

    private ExperienceRepository experienceRepository;
    private PortfolioRepository portfolioRepository;
    private CurrentUserService currentUserService;
    private ActivityService activityService;

    public ExperienceServiceImpl(
            ExperienceRepository experienceRepository,
            PortfolioRepository portfolioRepository,
            CurrentUserService currentUserService,
            ActivityService activityService) {

        this.experienceRepository = experienceRepository;
        this.portfolioRepository = portfolioRepository;
        this.currentUserService = currentUserService;
        this.activityService=activityService;
    }

    @Override
    public ApiResponse<ExperienceResponse> addExperience(
            ExperienceRequest request) {

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

        Experience experience = new Experience();

        experience.setCompanyName(request.getCompanyName());
        experience.setJobTitle(request.getJobTitle());
        experience.setLocation(request.getLocation());
        experience.setStartDate(request.getStartDate());
        experience.setEndDate(request.getEndDate());
        experience.setDescription(request.getDescription());
        experience.setPortfolio(portfolio);

        Experience savedExperience =
                experienceRepository.save(experience);
        activityService.saveActivity(
        	    portfolio,
        	    "Added Experience at " + savedExperience.getCompanyName()
        	);

        ExperienceResponse response = new ExperienceResponse();

        response.setId(savedExperience.getId());
        response.setCompanyName(savedExperience.getCompanyName());
        response.setJobTitle(savedExperience.getJobTitle());
        response.setLocation(savedExperience.getLocation());
        response.setStartDate(savedExperience.getStartDate());
        response.setEndDate(savedExperience.getEndDate());
        response.setDescription(savedExperience.getDescription());

        return new ApiResponse<>(
                true,
                "Experience added successfully",
                response);
    }

    @Override
    public ApiResponse<List<ExperienceResponse>> getExperiences() {

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

        List<Experience> experiences =
                experienceRepository.findByPortfolio(portfolio);

        List<ExperienceResponse> responseList =
                new ArrayList<>();

        for (Experience experience : experiences) {

            ExperienceResponse response =
                    new ExperienceResponse();

            response.setId(experience.getId());
            response.setCompanyName(experience.getCompanyName());
            response.setJobTitle(experience.getJobTitle());
            response.setLocation(experience.getLocation());
            response.setStartDate(experience.getStartDate());
            response.setEndDate(experience.getEndDate());
            response.setDescription(experience.getDescription());

            responseList.add(response);
        }

        return new ApiResponse<>(
                true,
                "Experiences fetched successfully",
                responseList);
    }

    @Override
    public ApiResponse<ExperienceResponse> updateExperience(
            Long id,
            ExperienceRequest request) {

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

        Experience experience =
                experienceRepository.findByIdAndPortfolio(id, portfolio)
                        .orElseThrow(() ->
                                new RuntimeException("Experience not found"));

        experience.setCompanyName(request.getCompanyName());
        experience.setJobTitle(request.getJobTitle());
        experience.setLocation(request.getLocation());
        experience.setStartDate(request.getStartDate());
        experience.setEndDate(request.getEndDate());
        experience.setDescription(request.getDescription());

        Experience updatedExperience =
                experienceRepository.save(experience);
        
        activityService.saveActivity(
        	    portfolio,
        	    "Updated Experience at " + updatedExperience.getCompanyName()
        	);

        ExperienceResponse response =
                new ExperienceResponse();

        response.setId(updatedExperience.getId());
        response.setCompanyName(updatedExperience.getCompanyName());
        response.setJobTitle(updatedExperience.getJobTitle());
        response.setLocation(updatedExperience.getLocation());
        response.setStartDate(updatedExperience.getStartDate());
        response.setEndDate(updatedExperience.getEndDate());
        response.setDescription(updatedExperience.getDescription());

        return new ApiResponse<>(
                true,
                "Experience updated successfully",
                response);
    }

    @Override
    public ApiResponse<Void> deleteExperience(Long id) {

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

        Experience experience =
                experienceRepository.findByIdAndPortfolio(id, portfolio)
                        .orElseThrow(() ->
                                new RuntimeException("Experience not found"));

        String companyName = experience.getCompanyName();

        experienceRepository.delete(experience);

        activityService.saveActivity(
            portfolio,
            "Deleted Experience at " + companyName
        );

        return new ApiResponse<>(
                true,
                "Experience deleted successfully",
                null);
    }
}