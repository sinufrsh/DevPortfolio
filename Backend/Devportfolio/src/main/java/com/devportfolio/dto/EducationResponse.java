package com.devportfolio.dto;

public class EducationResponse {

    private Long id;

    private String institutionName;

    private String degree;

    private String fieldOfStudy;

    private String startYear;

    private String endYear;

    private String grade;

    private String description;

    public EducationResponse() {
    }

    public EducationResponse(Long id,
                             String institutionName,
                             String degree,
                             String fieldOfStudy,
                             String startYear,
                             String endYear,
                             String grade,
                             String description) {

        this.id = id;
        this.institutionName = institutionName;
        this.degree = degree;
        this.fieldOfStudy = fieldOfStudy;
        this.startYear = startYear;
        this.endYear = endYear;
        this.grade = grade;
        this.description = description;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getInstitutionName() {
		return institutionName;
	}

	public void setInstitutionName(String institutionName) {
		this.institutionName = institutionName;
	}

	public String getDegree() {
		return degree;
	}

	public void setDegree(String degree) {
		this.degree = degree;
	}

	public String getFieldOfStudy() {
		return fieldOfStudy;
	}

	public void setFieldOfStudy(String fieldOfStudy) {
		this.fieldOfStudy = fieldOfStudy;
	}

	public String getStartYear() {
		return startYear;
	}

	public void setStartYear(String startYear) {
		this.startYear = startYear;
	}

	public String getEndYear() {
		return endYear;
	}

	public void setEndYear(String endYear) {
		this.endYear = endYear;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

    
    // Generate getters and setters
}