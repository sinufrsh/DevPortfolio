package com.devportfolio.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devportfolio.entity.Portfolio;
import com.devportfolio.entity.Project;

public interface ProjectRepository extends JpaRepository<Project, Long>{

    List<Project> findByPortfolio(Portfolio portfolio);
    Optional<Project> findByIdAndPortfolio(Long id,
            Portfolio portfolio);
    
    long countByPortfolio(Portfolio portfolio);

}