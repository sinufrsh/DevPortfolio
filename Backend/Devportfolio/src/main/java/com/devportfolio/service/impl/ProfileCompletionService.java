package com.devportfolio.service.impl;

import org.springframework.stereotype.Service;

import com.devportfolio.entity.Portfolio;

@Service
public class ProfileCompletionService {

    public int calculateCompletion(Portfolio portfolio) {

        int score = 0;

        if (portfolio.getHeadline() != null && !portfolio.getHeadline().isBlank())
            score += 10;

        if (portfolio.getBio() != null && !portfolio.getBio().isBlank())
            score += 10;

        if (portfolio.getResumeUrl() != null && !portfolio.getResumeUrl().isBlank())
            score += 10;

        if (!portfolio.getSkills().isEmpty())
            score += 15;

        if (!portfolio.getProjects().isEmpty())
            score += 15;

        if (!portfolio.getExperiences().isEmpty())
            score += 10;

        if (!portfolio.getEducations().isEmpty())
            score += 10;

        if (!portfolio.getCertifications().isEmpty())
            score += 10;

        if (portfolio.getSocialLink() != null)
            score += 10;

        return score;
    }
}