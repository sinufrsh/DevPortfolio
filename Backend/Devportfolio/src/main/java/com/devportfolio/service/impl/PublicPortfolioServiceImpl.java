package com.devportfolio.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.CertificationResponse;
import com.devportfolio.dto.EducationResponse;
import com.devportfolio.dto.ExperienceResponse;
import com.devportfolio.dto.ProjectResponse;
import com.devportfolio.dto.PublicPortfolioResponse;
import com.devportfolio.dto.SkillResponse;
import com.devportfolio.dto.SocialLinkResponse;
import com.devportfolio.entity.Certification;
import com.devportfolio.entity.Education;
import com.devportfolio.entity.Experience;
import com.devportfolio.entity.Portfolio;
import com.devportfolio.entity.Project;
import com.devportfolio.entity.Skill;
import com.devportfolio.exception.ResourceNotFoundException;
import com.devportfolio.repository.PortfolioRepository;
import com.devportfolio.service.PublicPortfolioService;

@Service
public class PublicPortfolioServiceImpl implements PublicPortfolioService {

    private PortfolioRepository portfolioRepository;

    public PublicPortfolioServiceImpl(PortfolioRepository portfolioRepository) {
        this.portfolioRepository = portfolioRepository;
    }

    @Override
    public ApiResponse<PublicPortfolioResponse> getPortfolio(String username) {

    	Portfolio portfolio = portfolioRepository
    	        .findByUsername(username)
    	        .orElseThrow(() -> new ResourceNotFoundException("Portfolio not found"));

        PublicPortfolioResponse response = new PublicPortfolioResponse();

        response.setUsername(portfolio.getUsername());
        response.setHeadline(portfolio.getHeadline());
        response.setBio(portfolio.getBio());
        response.setLocation(portfolio.getLocation());
        response.setTheme(portfolio.getTheme());
        response.setPhone(portfolio.getPhone());
        response.setResumeUrl(portfolio.getResumeUrl());
        
        List<SkillResponse> skillResponses = new ArrayList<>();

        for (Skill skill : portfolio.getSkills()) {

            SkillResponse skillResponse = new SkillResponse();

            skillResponse.setId(skill.getId());
            skillResponse.setName(skill.getName());
            skillResponse.setLevel(skill.getLevel());

            skillResponses.add(skillResponse);
        }

        response.setSkills(skillResponses);
        
        List<ProjectResponse> projectResponses = new ArrayList<>();

        for(Project project : portfolio.getProjects()){

            ProjectResponse dto = new ProjectResponse();

            dto.setId(project.getId());
            dto.setTitle(project.getTitle());
            dto.setDescription(project.getDescription());
            dto.setTechnologies(project.getTechnologies());
            dto.setGithubUrl(project.getGithubUrl());
            dto.setLiveDemoUrl(project.getLiveDemoUrl());
            dto.setImageUrl(project.getImageUrl());

            projectResponses.add(dto);
        }

        response.setProjects(projectResponses);
        
        
        List<ExperienceResponse> experienceResponses = new ArrayList<>();

        for (Experience experience : portfolio.getExperiences()) {

            ExperienceResponse dto = new ExperienceResponse();

            dto.setId(experience.getId());
            dto.setCompanyName(experience.getCompanyName());
            dto.setJobTitle(experience.getJobTitle());
            dto.setLocation(experience.getLocation());
            dto.setStartDate(experience.getStartDate());
            dto.setEndDate(experience.getEndDate());
            dto.setDescription(experience.getDescription());

            experienceResponses.add(dto);
        }

        response.setExperiences(experienceResponses);
        
        List<EducationResponse> educationResponses = new ArrayList<>();

        for (Education education : portfolio.getEducations()) {

            EducationResponse dto = new EducationResponse();

            dto.setId(education.getId());
            dto.setInstitutionName(education.getInstitutionName());
            dto.setDegree(education.getDegree());
            dto.setFieldOfStudy(education.getFieldOfStudy());
            dto.setStartYear(education.getStartYear());
            dto.setEndYear(education.getEndYear());
            dto.setGrade(education.getGrade());
            dto.setDescription(education.getDescription());

            educationResponses.add(dto);
        }

        response.setEducations(educationResponses);
        
        List<CertificationResponse> certificationResponses = new ArrayList<>();

        for (Certification certification : portfolio.getCertifications()) {

            CertificationResponse dto = new CertificationResponse();

            dto.setId(certification.getId());
            dto.setCertificateName(certification.getCertificateName());
            dto.setOrganization(certification.getOrganization());
            dto.setIssueDate(certification.getIssueDate());
            dto.setCredentialUrl(certification.getCredentialUrl());

            certificationResponses.add(dto);
        }

        response.setCertifications(certificationResponses);
        
        if (portfolio.getSocialLink() != null) {

            SocialLinkResponse socialResponse = new SocialLinkResponse();

            socialResponse.setId(portfolio.getSocialLink().getId());
            socialResponse.setGithub(portfolio.getSocialLink().getGithub());
            socialResponse.setLinkedin(portfolio.getSocialLink().getLinkedin());
            socialResponse.setLeetcode(portfolio.getSocialLink().getLeetcode());
            socialResponse.setHackerrank(portfolio.getSocialLink().getHackerrank());
            socialResponse.setPortfolioWebsite(portfolio.getSocialLink().getPortfolioWebsite());
            socialResponse.setTwitter(portfolio.getSocialLink().getTwitter());

            response.setSocialLinks(socialResponse);
        }

        return new ApiResponse<>(
                true,
                "Portfolio fetched successfully",
                response
        );
    }
}