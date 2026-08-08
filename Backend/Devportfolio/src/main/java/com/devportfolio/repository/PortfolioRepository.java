package com.devportfolio.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devportfolio.entity.Portfolio;
import com.devportfolio.entity.User;

public interface PortfolioRepository extends JpaRepository<Portfolio, Long> {

    Optional<Portfolio> findByUser(User user);
    
    Optional<Portfolio> findByUsername(String username);

}