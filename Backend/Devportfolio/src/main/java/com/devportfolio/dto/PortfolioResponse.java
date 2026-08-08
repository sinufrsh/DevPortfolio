package com.devportfolio.dto;

public class PortfolioResponse {

    private Long id;
    private String username;
    private String headline;
    private String bio;
    private String location;
    private String theme;
    private String profileImageUrl;
    
    private String phone;
    private String resumeUrl;

    private Boolean published;
    public PortfolioResponse() {
    }

    public PortfolioResponse(Long id,
                             String username,
                             String headline,
                             String bio,
                             String location,
                             String theme) {

        this.id = id;
        this.username = username;
        this.headline = headline;
        this.bio = bio;
        this.location = location;
        this.theme = theme;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

	public String getProfileImageUrl() {
		return profileImageUrl;
	}

	public void setProfileImageUrl(String profileImageUrl) {
		this.profileImageUrl = profileImageUrl;
	}

	public Boolean getPublished() {
		return published;
	}

	public void setPublished(Boolean published) {
		this.published = published;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getResumeUrl() {
		return resumeUrl;
	}

	public void setResumeUrl(String resumeUrl) {
		this.resumeUrl = resumeUrl;
	}
	
    
}