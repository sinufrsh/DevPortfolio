package com.devportfolio.dto;

public class SocialLinkRequest {

    private String github;

    private String linkedin;

    private String leetcode;

    private String hackerrank;

    private String portfolioWebsite;

    private String twitter;

    public SocialLinkRequest() {
    }

	public SocialLinkRequest(String github, String linkedin, String leetcode, String hackerrank,
			String portfolioWebsite, String twitter) {
		
		this.github = github;
		this.linkedin = linkedin;
		this.leetcode = leetcode;
		this.hackerrank = hackerrank;
		this.portfolioWebsite = portfolioWebsite;
		this.twitter = twitter;
	}

	public String getGithub() {
		return github;
	}

	public void setGithub(String github) {
		this.github = github;
	}

	public String getLinkedin() {
		return linkedin;
	}

	public void setLinkedin(String linkedin) {
		this.linkedin = linkedin;
	}

	public String getLeetcode() {
		return leetcode;
	}

	public void setLeetcode(String leetcode) {
		this.leetcode = leetcode;
	}

	public String getHackerrank() {
		return hackerrank;
	}

	public void setHackerrank(String hackerrank) {
		this.hackerrank = hackerrank;
	}

	public String getPortfolioWebsite() {
		return portfolioWebsite;
	}

	public void setPortfolioWebsite(String portfolioWebsite) {
		this.portfolioWebsite = portfolioWebsite;
	}

	public String getTwitter() {
		return twitter;
	}

	public void setTwitter(String twitter) {
		this.twitter = twitter;
	}

    
    // Constructor
    // Getters
    // Setters
}