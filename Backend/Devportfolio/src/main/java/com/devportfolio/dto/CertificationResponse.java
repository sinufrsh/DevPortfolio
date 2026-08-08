package com.devportfolio.dto;

public class CertificationResponse {

    private Long id;

    private String certificateName;

    private String organization;

    private String issueDate;

    private String credentialUrl;

    public CertificationResponse() {
    }

    
    
    
	public CertificationResponse(Long id, String certificateName, String organization, String issueDate,
			String credentialUrl) {
	
		this.id = id;
		this.certificateName = certificateName;
		this.organization = organization;
		this.issueDate = issueDate;
		this.credentialUrl = credentialUrl;
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

    
    // constructor

    // getters

    // setters
}