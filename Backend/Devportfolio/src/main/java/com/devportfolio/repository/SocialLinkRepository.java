package com.devportfolio.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devportfolio.entity.Portfolio;
import com.devportfolio.entity.SocialLink;

public interface SocialLinkRepository
        extends JpaRepository<SocialLink, Long>{

    Optional<SocialLink> findByPortfolio(Portfolio portfolio);

}