package com.devportfolio.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devportfolio.entity.Certification;
import com.devportfolio.entity.Portfolio;

public interface CertificationRepository
        extends JpaRepository<Certification, Long>{

    List<Certification> findByPortfolio(Portfolio portfolio);

    Optional<Certification> findByIdAndPortfolio(
            Long id,
            Portfolio portfolio);

    long countByPortfolio(Portfolio portfolio);
}