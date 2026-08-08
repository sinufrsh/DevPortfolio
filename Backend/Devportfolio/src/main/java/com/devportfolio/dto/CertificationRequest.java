package com.devportfolio.dto;

import jakarta.validation.constraints.NotBlank;

public class CertificationRequest {

    @NotBlank
    private String certificateName;

    @NotBlank
    private String organization;

    private String issueDate;

    private String credentialUrl;

    public CertificationRequest() {
    }

	public CertificationRequest(@NotBlank String certificateName, @NotBlank String organization, String issueDate,
			String credentialUrl) {
		
		this.certificateName = certificateName;
		this.organization = organization;
		this.issueDate = issueDate;
		this.credentialUrl = credentialUrl;
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
    
    

    // constructor

    // getters

    // setters
}