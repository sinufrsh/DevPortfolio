package com.devportfolio.service.impl;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.ProjectRequest;
import com.devportfolio.dto.ProjectResponse;
import com.devportfolio.entity.Portfolio;
import com.devportfolio.entity.Project;
import com.devportfolio.entity.User;
import com.devportfolio.repository.PortfolioRepository;
import com.devportfolio.repository.ProjectRepository;
import com.devportfolio.service.ActivityService;
import com.devportfolio.service.CurrentUserService;
import com.devportfolio.service.ProjectService;

@Service
public class ProjectServiceImpl implements ProjectService {
	
	private final String UPLOAD_DIR = "uploads/projects/";

    private ProjectRepository projectRepository;
    private PortfolioRepository portfolioRepository;
    
    private CurrentUserService currentUserService;
    private ActivityService activityService;

    public ProjectServiceImpl(ProjectRepository projectRepository,
                              PortfolioRepository portfolioRepository,
                              CurrentUserService currentUserService,ActivityService activityService) {

        this.projectRepository = projectRepository;
        this.portfolioRepository = portfolioRepository;
        this.currentUserService = currentUserService;
        this.activityService=activityService;
    }

    @Override
    public ApiResponse<ProjectResponse> addProject(
            ProjectRequest request,
            MultipartFile image) {

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


        Project project = new Project();

        project.setTitle(request.getTitle());
        project.setDescription(request.getDescription());
        project.setTechnologies(request.getTechnologies());
        project.setGithubUrl(request.getGithubUrl());
        project.setLiveDemoUrl(request.getLiveDemoUrl());
        String imageUrl = saveImage(image);
        project.setImageUrl(imageUrl);
        project.setPortfolio(portfolio);

        Project savedProject = projectRepository.save(project);
        activityService.saveActivity(
        	    portfolio,
        	    "Added Project: " + savedProject.getTitle()
        	);

        ProjectResponse response = new ProjectResponse();

        response.setId(savedProject.getId());
        response.setTitle(savedProject.getTitle());
        response.setDescription(savedProject.getDescription());
        response.setTechnologies(savedProject.getTechnologies());
        response.setGithubUrl(savedProject.getGithubUrl());
        response.setLiveDemoUrl(savedProject.getLiveDemoUrl());
        response.setImageUrl(savedProject.getImageUrl());

        return new ApiResponse<>(
                true,
                "Project added successfully",
                response
        );
    }

    @Override
    public ApiResponse<List<ProjectResponse>> getProjects() {

       User user=currentUserService.getCurrentUser();

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

        List<Project> projects = projectRepository.findByPortfolio(portfolio);

        List<ProjectResponse> responseList = new ArrayList<>();

        for (Project project : projects) {

            ProjectResponse response = new ProjectResponse();

            response.setId(project.getId());
            response.setTitle(project.getTitle());
            response.setDescription(project.getDescription());
            response.setTechnologies(project.getTechnologies());
            response.setGithubUrl(project.getGithubUrl());
            response.setLiveDemoUrl(project.getLiveDemoUrl());
            response.setImageUrl(project.getImageUrl());

            responseList.add(response);
        }

        return new ApiResponse<>(
                true,
                "Projects fetched successfully",
                responseList
        );
    }

  
    @Override
    public ApiResponse<ProjectResponse> updateProject(
            Long id,
            ProjectRequest request,
            MultipartFile image) {

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
    	Project project = projectRepository
    	        .findByIdAndPortfolio(id, portfolio)
    	        .orElseThrow(() ->
    	                new RuntimeException("Project not found"));

        project.setTitle(request.getTitle());
        project.setDescription(request.getDescription());
        project.setTechnologies(request.getTechnologies());
        project.setGithubUrl(request.getGithubUrl());
        project.setLiveDemoUrl(request.getLiveDemoUrl());
        if (image != null && !image.isEmpty()) {
            String imageUrl = saveImage(image);
            project.setImageUrl(imageUrl);
        }

        Project updatedProject = projectRepository.save(project);
        activityService.saveActivity(
        	    portfolio,
        	    "Updated Project: " + updatedProject.getTitle()
        	);

        ProjectResponse response = new ProjectResponse();

        response.setId(updatedProject.getId());
        response.setTitle(updatedProject.getTitle());
        response.setDescription(updatedProject.getDescription());
        response.setTechnologies(updatedProject.getTechnologies());
        response.setGithubUrl(updatedProject.getGithubUrl());
        response.setLiveDemoUrl(updatedProject.getLiveDemoUrl());
        response.setImageUrl(updatedProject.getImageUrl());

        return new ApiResponse<>(
                true,
                "Project updated successfully",
                response
        );
    }

    @Override
    public ApiResponse<Void> deleteProject(Long id) {

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

    	Project project = projectRepository
    	        .findByIdAndPortfolio(id, portfolio)
    	        .orElseThrow(() ->
    	                new RuntimeException("Project not found"));

    	String projectTitle = project.getTitle();

    	projectRepository.delete(project);

    	activityService.saveActivity(
    	    portfolio,
    	    "Deleted Project: " + projectTitle
    	);
        return new ApiResponse<>(
                true,
                "Project deleted successfully",
                null
        );
    }
        
        
        private String saveImage(MultipartFile image) {

            if (image == null || image.isEmpty()) {
                return null;
            }

            try {

                Path uploadPath = Paths.get(UPLOAD_DIR);

                if (!Files.exists(uploadPath)) {
                    Files.createDirectories(uploadPath);
                }

                String fileName =
                        UUID.randomUUID() + "_" + image.getOriginalFilename();

                Path filePath = uploadPath.resolve(fileName);

                Files.copy(
                        image.getInputStream(),
                        filePath,
                        StandardCopyOption.REPLACE_EXISTING
                );

                return "/uploads/projects/" + fileName;

            } catch (IOException e) {

                throw new RuntimeException("Failed to upload image.");

            }
    }
}