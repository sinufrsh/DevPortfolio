package com.devportfolio.dto;

import java.util.List;

public class PublicPortfolioResponse {

    private String username;
    private String headline;
    private String bio;
    private String location;
    private String theme;
    private String profileImageUrl;
    
    private String phone;
    private String email;
    private String resumeUrl;

    public String getProfileImageUrl() {
		return profileImageUrl;
	}

	public void setProfileImageUrl(String profileImageUrl) {
		this.profileImageUrl = profileImageUrl;
	}

	private SocialLinkResponse socialLinks;

    private List<SkillResponse> skills;
    private List<ProjectResponse> projects;
    private List<ExperienceResponse> experiences;
    private List<EducationResponse> educations;
    private List<CertificationResponse> certifications;

    public PublicPortfolioResponse() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getHeadline() {
        return headline;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getTheme() {
        return theme;
    }

    public void setTheme(String theme) {
        this.theme = theme;
    }

    public SocialLinkResponse getSocialLinks() {
        return socialLinks;
    }

    public void setSocialLinks(SocialLinkResponse socialLinks) {
        this.socialLinks = socialLinks;
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

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getResumeUrl() {
		return resumeUrl;
	}

	public void setResumeUrl(String resumeUrl) {
		this.resumeUrl = resumeUrl;
	}
    
}