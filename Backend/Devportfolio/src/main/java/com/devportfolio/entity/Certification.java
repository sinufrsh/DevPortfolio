package com.devportfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "certifications")
public class Certification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String certificateName;

    @Column(nullable = false)
    private String organization;

    private String issueDate;

    private String credentialUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "portfolio_id")
    private Portfolio portfolio;

    public Certification() {
    }

    public Certification(Long id, String certificateName,
                         String organization,
                         String issueDate,
                         String credentialUrl,
                         Portfolio portfolio) {

        this.id = id;
        this.certificateName = certificateName;
        this.organization = organization;
        this.issueDate = issueDate;
        this.credentialUrl = credentialUrl;
        this.portfolio = portfolio;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCertificateName() {
		return certificateName;
	}

	public void setCertificateName(String certificateName) {
		this.certificateName = certificateName;
	}

	public String getOrganization() {
		return organization;
	}

	public void setOrganization(String organization) {
		this.organization = organization;
	}

	public String getIssueDate() {
		return issueDate;
	}

	public void setIssueDate(String issueDate) {
		this.issueDate = issueDate;
	}

	public String getCredentialUrl() {
		return credentialUrl;
	}

	public void setCredentialUrl(String credentialUrl) {
		this.credentialUrl = credentialUrl;
	}

	public Portfolio getPortfolio() {
		return portfolio;
	}

	public void setPortfolio(Portfolio portfolio) {
		this.portfolio = portfolio;
	}

    
    // Generate all getters and setters
}