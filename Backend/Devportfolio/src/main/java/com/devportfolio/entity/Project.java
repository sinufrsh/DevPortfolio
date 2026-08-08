package com.devportfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(length = 1500)
    private String description;

    private String technologies;

    private String githubUrl;

    private String liveDemoUrl;

    private String imageUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "portfolio_id")
    private Portfolio portfolio;

    public Project() {
    }

    public Project(Long id, String title, String description,
                   String technologies,
                   String githubUrl,
                   String liveDemoUrl,
                   String imageUrl,
                   Portfolio portfolio) {

        this.id = id;
        this.title = title;
        this.description = description;
        this.technologies = technologies;
        this.githubUrl = githubUrl;
        this.liveDemoUrl = liveDemoUrl;
        this.imageUrl = imageUrl;
        this.portfolio = portfolio;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getTitle(){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public String getTechnologies(){
        return technologies;
    }

    public void setTechnologies(String technologies){
        this.technologies = technologies;
    }

    public String getGithubUrl(){
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl){
        this.githubUrl = githubUrl;
    }

    public String getLiveDemoUrl(){
        return liveDemoUrl;
    }

    public void setLiveDemoUrl(String liveDemoUrl){
        this.liveDemoUrl = liveDemoUrl;
    }

    public String getImageUrl(){
        return imageUrl;
    }

    public void setImageUrl(String imageUrl){
        this.imageUrl = imageUrl;
    }

    public Portfolio getPortfolio(){
        return portfolio;
    }

    public void setPortfolio(Portfolio portfolio){
        this.portfolio = portfolio;
    }
}