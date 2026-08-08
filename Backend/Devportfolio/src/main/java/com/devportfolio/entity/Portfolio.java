package com.devportfolio.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "portfolios")
public class Portfolio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String headline;

    @Column(length = 1000)
    private String bio;

    private String location;

    private String theme;
    
    private String profileImageUrl;
    
    private Boolean published = false;
    
    private String phone;

    private String resumeUrl;

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

	@OneToOne
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;
    
    @OneToMany(
            mappedBy = "portfolio",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Skill> skills = new ArrayList<>();

    @OneToMany(
            mappedBy = "portfolio",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Project> projects = new ArrayList<>();
    
    @OneToMany(
            mappedBy = "portfolio",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Experience> experiences = new ArrayList<>();
    
    @OneToMany(
            mappedBy = "portfolio",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Education> educations = new ArrayList<>();
    
    @OneToMany(
            mappedBy = "portfolio",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Certification> certifications = new ArrayList<>();
    
    @OneToOne(
            mappedBy = "portfolio",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private SocialLink socialLink;
    
    @Column(unique = true, nullable = false)
    private String username;
    
    
    public Portfolio() {
    }

    public Portfolio(Long id, String headline, String bio, String location,
                      String theme, User user) {
        this.id = id;
        this.headline = headline;
        this.bio = bio;
        this.location = location;
        this.theme = theme;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    
    public List<Skill> getSkills() {
        return skills;
    }

    public void setSkills(List<Skill> skills) {
        this.skills = skills;
    }
    
    public List<Project> getProjects() {
        return projects;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }
    
    public List<Experience> getExperiences() {
        return experiences;
    }

    public void setExperiences(List<Experience> experiences) {
        this.experiences = experiences;
    }

	public List<Education> getEducations() {
		return educations;
	}

	public void setEducations(List<Education> educations) {
		this.educations = educations;
	}

	public List<Certification> getCertifications() {
		return certifications;
	}

	public void setCertifications(List<Certification> certifications) {
		this.certifications = certifications;
	}

	public SocialLink getSocialLink() {
		return socialLink;
	}

	public void setSocialLink(SocialLink socialLink) {
		this.socialLink = socialLink;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	
    
}