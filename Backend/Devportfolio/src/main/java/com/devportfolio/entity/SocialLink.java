package com.devportfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "social_links")
public class SocialLink {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String github;

    private String linkedin;

    private String leetcode;

    private String hackerrank;

    private String portfolioWebsite;

    private String twitter;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "portfolio_id")
    private Portfolio portfolio;

    public SocialLink() {
    }

    public SocialLink(Long id,
                      String github,
                      String linkedin,
                      String leetcode,
                      String hackerrank,
                      String portfolioWebsite,
                      String twitter,
                      Portfolio portfolio) {

        this.id = id;
        this.github = github;
        this.linkedin = linkedin;
        this.leetcode = leetcode;
        this.hackerrank = hackerrank;
        this.portfolioWebsite = portfolioWebsite;
        this.twitter = twitter;
        this.portfolio = portfolio;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public Portfolio getPortfolio() {
		return portfolio;
	}

	public void setPortfolio(Portfolio portfolio) {
		this.portfolio = portfolio;
	}

    
    // Generate Getters & Setters
}