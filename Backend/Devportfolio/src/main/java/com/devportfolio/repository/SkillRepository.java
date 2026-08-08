package com.devportfolio.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devportfolio.entity.Portfolio;
import com.devportfolio.entity.Skill;

public interface SkillRepository extends JpaRepository<Skill, Long>{

    List<Skill> findByPortfolio(Portfolio portfolio);
    
    Optional<Skill> findByIdAndPortfolio(Long id, Portfolio portfolio);
    
    long countByPortfolio(Portfolio portfolio);

}