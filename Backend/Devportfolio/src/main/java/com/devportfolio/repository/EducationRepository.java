package com.devportfolio.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devportfolio.entity.Education;
import com.devportfolio.entity.Portfolio;

public interface EducationRepository
        extends JpaRepository<Education, Long> {

    List<Education> findByPortfolio(Portfolio portfolio);

    Optional<Education> findByIdAndPortfolio(
            Long id,
            Portfolio portfolio);
    long countByPortfolio(Portfolio portfolio);
}