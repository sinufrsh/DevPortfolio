package com.devportfolio.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devportfolio.entity.Activity;
import com.devportfolio.entity.Portfolio;

public interface ActivityRepository
extends JpaRepository<Activity, Long> {

List<Activity> findTop10ByPortfolioOrderByCreatedAtDesc(Portfolio portfolio);

}