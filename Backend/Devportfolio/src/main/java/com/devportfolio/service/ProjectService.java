package com.devportfolio.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.ProjectRequest;
import com.devportfolio.dto.ProjectResponse;

public interface ProjectService {

	ApiResponse<ProjectResponse> addProject(
	        ProjectRequest request,
	        MultipartFile image);

	ApiResponse<ProjectResponse> updateProject(
	        Long id,
	        ProjectRequest request,
	        MultipartFile image);

    ApiResponse<List<ProjectResponse>> getProjects();


    ApiResponse<Void> deleteProject(Long id);
}