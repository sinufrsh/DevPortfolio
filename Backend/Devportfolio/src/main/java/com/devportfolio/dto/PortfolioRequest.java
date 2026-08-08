package com.devportfolio.dto;

import jakarta.validation.constraints.NotBlank;

public class PortfolioRequest {

    @NotBlank(message = "Headline is required")
    private String headline;

    private String bio;

    private String location;

   
    private String theme;
    private String username;
    

    private Boolean published;
    
    private String phone;

    public PortfolioRequest() {
    }

    public PortfolioRequest(String headline, String bio, String location,
                            String theme) {
        this.headline = headline;
        this.bio = bio;
        this.location = location;
      
        this.theme = theme;
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

    public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
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

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	

	public Boolean getPublished() {
		return published;
	}

	public void setPublished(Boolean published) {
		this.published = published;
	}
	
    
}