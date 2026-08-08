package com.devportfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "educations")
public class Education {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String institutionName;

    @Column(nullable = false)
    private String degree;

    private String fieldOfStudy;

    private String startYear;

    private String endYear;

    private String grade;

    @Column(length = 1000)
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "portfolio_id")
    private Portfolio portfolio;

    public Education() {
    }

    public Education(Long id,
                     String institutionName,
                     String degree,
                     String fieldOfStudy,
                     String startYear,
                     String endYear,
                     String grade,
                     String description,
                     Portfolio portfolio) {

        this.id = id;
        this.institutionName = institutionName;
        this.degree = degree;
        this.fieldOfStudy = fieldOfStudy;
        this.startYear = startYear;
        this.endYear = endYear;
        this.grade = grade;
        this.description = description;
        this.portfolio = portfolio;
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

	public Portfolio getPortfolio() {
		return portfolio;
	}

	public void setPortfolio(Portfolio portfolio) {
		this.portfolio = portfolio;
	}

    // Generate all getters and setters
}