package com.devportfolio.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devportfolio.entity.Experience;
import com.devportfolio.entity.Portfolio;

public interface ExperienceRepository
        extends JpaRepository<Experience, Long> {

    List<Experience> findByPortfolio(Portfolio portfolio);

    Optional<Experience> findByIdAndPortfolio(Long id,
                                              Portfolio portfolio);
    long countByPortfolio(Portfolio portfolio);
}