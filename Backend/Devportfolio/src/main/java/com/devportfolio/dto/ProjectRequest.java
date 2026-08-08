package com.devportfolio.dto;

import jakarta.validation.constraints.NotBlank;

public class ProjectRequest {

    @NotBlank(message = "Project title is required")
    private String title;

    @NotBlank(message = "Description is required")
    private String description;

    private String technologies;

    private String githubUrl;

    private String liveDemoUrl;

    private String imageUrl;

    public ProjectRequest() {
    }

    public ProjectRequest(String title, String description,
                          String technologies,
                          String githubUrl,
                          String liveDemoUrl,
                          String imageUrl) {

        this.title = title;
        this.description = description;
        this.technologies = technologies;
        this.githubUrl = githubUrl;
        this.liveDemoUrl = liveDemoUrl;
        this.imageUrl = imageUrl;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTechnologies() {
        return technologies;
    }

    public void setTechnologies(String technologies) {
        this.technologies = technologies;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public String getLiveDemoUrl() {
        return liveDemoUrl;
    }

    public void setLiveDemoUrl(String liveDemoUrl) {
        this.liveDemoUrl = liveDemoUrl;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}