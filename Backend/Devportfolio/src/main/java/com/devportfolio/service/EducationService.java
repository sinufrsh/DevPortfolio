package com.devportfolio.service;

import java.util.List;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.EducationRequest;
import com.devportfolio.dto.EducationResponse;

public interface EducationService {

    ApiResponse<EducationResponse> addEducation(EducationRequest request);

    ApiResponse<List<EducationResponse>> getEducations();

    ApiResponse<EducationResponse> updateEducation(Long id, EducationRequest request);

    ApiResponse<Void> deleteEducation(Long id);

}