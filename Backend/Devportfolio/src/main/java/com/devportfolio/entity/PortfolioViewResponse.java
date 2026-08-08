package com.devportfolio.entity;

import java.util.List;

import com.devportfolio.dto.CertificationResponse;
import com.devportfolio.dto.EducationResponse;
import com.devportfolio.dto.ExperienceResponse;
import com.devportfolio.dto.PortfolioResponse;
import com.devportfolio.dto.ProjectResponse;
import com.devportfolio.dto.SkillResponse;
import com.devportfolio.dto.SocialLinkResponse;

public class PortfolioViewResponse {

    private PortfolioResponse portfolio;

    private List<SkillResponse> skills;

    private List<ProjectResponse> projects;

    private List<ExperienceResponse> experiences;

    private List<EducationResponse> educations;

    private List<CertificationResponse> certifications;

    private SocialLinkResponse socialLinks;

    public PortfolioViewResponse(){}

	public PortfolioResponse getPortfolio() {
		return portfolio;
	}

	public void setPortfolio(PortfolioResponse portfolio) {
		this.portfolio = portfolio;
	}

	public List<SkillResponse> getSkills() {
		return skills;
	}

	public void setSkills(List<SkillResponse> skills) {
		this.skills = skills;
	}

	public List<ProjectResponse> getProjects() {
		return projects;
	}

	public void setProjects(List<ProjectResponse> projects) {
		this.projects = projects;
	}

	public List<ExperienceResponse> getExperiences() {
		return experiences;
	}

	public void setExperiences(List<ExperienceResponse> experiences) {
		this.experiences = experiences;
	}

	public List<EducationResponse> getEducations() {
		return educations;
	}

	public void setEducations(List<EducationResponse> educations) {
		this.educations = educations;
	}

	public List<CertificationResponse> getCertifications() {
		return certifications;
	}

	public void setCertifications(List<CertificationResponse> certifications) {
		this.certifications = certifications;
	}

	public SocialLinkResponse getSocialLinks() {
		return socialLinks;
	}

	public void setSocialLinks(SocialLinkResponse socialLinks) {
		this.socialLinks = socialLinks;
	}

    //Generate Getters & Setters
    
}
