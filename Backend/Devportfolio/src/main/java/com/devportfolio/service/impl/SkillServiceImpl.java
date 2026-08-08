package com.devportfolio.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.SkillRequest;
import com.devportfolio.dto.SkillResponse;
import com.devportfolio.entity.Portfolio;
import com.devportfolio.entity.Skill;
import com.devportfolio.entity.User;
import com.devportfolio.repository.PortfolioRepository;
import com.devportfolio.repository.SkillRepository;
import com.devportfolio.repository.UserRepository;
import com.devportfolio.service.ActivityService;
import com.devportfolio.service.CurrentUserService;
import com.devportfolio.service.SkillService;

@Service
public class SkillServiceImpl implements SkillService {

    private SkillRepository skillRepository;
    private PortfolioRepository
    portfolioRepository;
    private CurrentUserService currentUserService;
    
    private ActivityService activityService;

    public SkillServiceImpl(
            SkillRepository skillRepository,
            PortfolioRepository portfolioRepository,
            CurrentUserService currentUserService,ActivityService activityService) {

        this.skillRepository = skillRepository;
        this.portfolioRepository = portfolioRepository;
        this.currentUserService = currentUserService;
        this.activityService=activityService;
    }

    @Override
    public ApiResponse<SkillResponse> addSkill(SkillRequest request) {

    	User user = currentUserService.getCurrentUser();

    	Optional<Portfolio> optionalPortfolio =
                portfolioRepository.findByUser(user);

        if (optionalPortfolio.isEmpty()) {

            return new ApiResponse<>(
                    false,
                    "Portfolio not found",
                    null
            );
        }

        Portfolio portfolio = optionalPortfolio.get();

        Skill skill = new Skill();

        skill.setName(request.getName());
        skill.setLevel(request.getLevel());
        skill.setPortfolio(portfolio);

        Skill savedSkill = skillRepository.save(skill);
        
        activityService.saveActivity(
        	    portfolio,
        	    "Added " + skill.getName() + " Skill"
        	);

        SkillResponse response = new SkillResponse();

        response.setId(savedSkill.getId());
        response.setName(savedSkill.getName());
        response.setLevel(savedSkill.getLevel());

        return new ApiResponse<>(
                true,
                "Skill added successfully",
                response
        );
    }

    @Override
    public ApiResponse<List<SkillResponse>> getSkills() {

    	User user = currentUserService.getCurrentUser();

        Portfolio portfolio = portfolioRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Portfolio not found"));

        List<Skill> skills = skillRepository.findByPortfolio(portfolio);

        List<SkillResponse> responseList = new ArrayList<>();

        for (Skill skill : skills) {

            SkillResponse response = new SkillResponse();

            response.setId(skill.getId());
            response.setName(skill.getName());
            response.setLevel(skill.getLevel());

            responseList.add(response);
        }

        return new ApiResponse<>(
                true,
                "Skills fetched successfully",
                responseList
        );
    }

    @Override
    public ApiResponse<SkillResponse> updateSkill(Long id,
                                                  SkillRequest request) {

    	User user = currentUserService.getCurrentUser();

    	Portfolio portfolio = portfolioRepository.findByUser(user)
    	        .orElseThrow(() -> new RuntimeException("Portfolio not found"));

    	Skill skill = skillRepository
    	        .findByIdAndPortfolio(id, portfolio)
    	        .orElseThrow(() ->
    	                new RuntimeException("Skill not found"));

        skill.setName(request.getName());
        skill.setLevel(request.getLevel());

        Skill updatedSkill = skillRepository.save(skill);
        
        activityService.saveActivity(
                portfolio,
                "Updated " + updatedSkill.getName() + " Skill"
        );

        SkillResponse response = new SkillResponse();

        response.setId(updatedSkill.getId());
        response.setName(updatedSkill.getName());
        response.setLevel(updatedSkill.getLevel());

        return new ApiResponse<>(
                true,
                "Skill updated successfully",
                response
        );
    }
    
    

    @Override
    public ApiResponse<Void> deleteSkill(Long id) {

    	User user = currentUserService.getCurrentUser();

    	Portfolio portfolio = portfolioRepository.findByUser(user)
    	        .orElseThrow(() -> new RuntimeException("Portfolio not found"));

    	Skill skill = skillRepository
    	        .findByIdAndPortfolio(id, portfolio)
    	        .orElseThrow(() ->
    	                new RuntimeException("Skill not found"));

    	String skillName = skill.getName();

    	skillRepository.delete(skill);

    	activityService.saveActivity(
    	        portfolio,
    	        "Deleted " + skillName + " Skill"
    	);

        return new ApiResponse<>(
                true,
                "Skill deleted successfully",
                null
        );
    }

}