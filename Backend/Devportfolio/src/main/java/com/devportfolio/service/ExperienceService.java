package com.devportfolio.service;

import java.util.List;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.ExperienceRequest;
import com.devportfolio.dto.ExperienceResponse;

public interface ExperienceService {

    ApiResponse<ExperienceResponse> addExperience(
            ExperienceRequest request);

    ApiResponse<List<ExperienceResponse>> getExperiences();

    ApiResponse<ExperienceResponse> updateExperience(
            Long id,
            ExperienceRequest request);

    ApiResponse<Void> deleteExperience(Long id);

}