package com.devportfolio.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;
import org.springframework.web.multipart.MultipartFile;
import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.ProjectRequest;
import com.devportfolio.dto.ProjectResponse;
import com.devportfolio.service.ProjectService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ApiResponse<ProjectResponse>> addProject(
            @Valid @RequestPart("project") ProjectRequest request,
            @RequestPart(value = "image", required = false) MultipartFile image) {

        ApiResponse<ProjectResponse> response =
                projectService.addProject(request, image);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<ProjectResponse>>> getProjects() {

        ApiResponse<List<ProjectResponse>> response =
                projectService.getProjects();

        return ResponseEntity.ok(response);
    }

    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ApiResponse<ProjectResponse>> updateProject(
            @PathVariable Long id,
            @Valid @RequestPart("project") ProjectRequest request,
            @RequestPart(value = "image", required = false) MultipartFile image) {

        ApiResponse<ProjectResponse> response =
                projectService.updateProject(id, request, image);

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteProject(
            @PathVariable Long id) {

        ApiResponse<Void> response =
                projectService.deleteProject(id);

        return ResponseEntity.ok(response);
    }
}