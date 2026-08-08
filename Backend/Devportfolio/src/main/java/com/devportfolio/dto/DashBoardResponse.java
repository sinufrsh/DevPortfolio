package com.devportfolio.dto;

import java.util.List;

public class DashBoardResponse {

    private String userName;

    private int skills;

    private int projects;

    private int experiences;

    private int educations;

    private int certifications;

    private boolean socialLinks;

    private int profileCompletion;
    
    private List<String> pendingTasks;
    
    private List<ActivityResponse> recentActivities;

    
    
	public List<ActivityResponse> getRecentActivities() {
		return recentActivities;
	}

	public void setRecentActivities(List<ActivityResponse> recentActivities) {
		this.recentActivities = recentActivities;
	}

	public List<String> getPendingTasks() {
		return pendingTasks;
	}

	public void setPendingTasks(List<String> pendingTasks) {
		this.pendingTasks = pendingTasks;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public int getSkills() {
		return skills;
	}

	public void setSkills(int skills) {
		this.skills = skills;
	}

	public int getProjects() {
		return projects;
	}

	public void setProjects(int projects) {
		this.projects = projects;
	}

	public int getExperiences() {
		return experiences;
	}

	public void setExperiences(int experiences) {
		this.experiences = experiences;
	}

	public int getEducations() {
		return educations;
	}

	public void setEducations(int educations) {
		this.educations = educations;
	}

	public int getCertifications() {
		return certifications;
	}

	public void setCertifications(int certifications) {
		this.certifications = certifications;
	}

	public boolean isSocialLinks() {
		return socialLinks;
	}

	public void setSocialLinks(boolean socialLinks) {
		this.socialLinks = socialLinks;
	}

	public int getProfileCompletion() {
		return profileCompletion;
	}

	public void setProfileCompletion(int profileCompletion) {
		this.profileCompletion = profileCompletion;
	}

   
}
