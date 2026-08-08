package com.devportfolio.dto;

import jakarta.validation.constraints.NotBlank;

public class SkillRequest {

    @NotBlank(message = "Skill name is required")
    private String name;

    @NotBlank(message = "Skill level is required")
    private String level;

    public SkillRequest() {
    }

    public SkillRequest(String name, String level) {
        this.name = name;
        this.level = level;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}