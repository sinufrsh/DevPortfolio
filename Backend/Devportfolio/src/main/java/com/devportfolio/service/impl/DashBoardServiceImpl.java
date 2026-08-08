package com.devportfolio.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.devportfolio.dto.ActivityResponse;
import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.DashBoardResponse;
import com.devportfolio.entity.Portfolio;
import com.devportfolio.entity.User;
import com.devportfolio.repository.ActivityRepository;
import com.devportfolio.repository.CertificationRepository;
import com.devportfolio.repository.EducationRepository;
import com.devportfolio.repository.ExperienceRepository;
import com.devportfolio.repository.PortfolioRepository;
import com.devportfolio.repository.ProjectRepository;
import com.devportfolio.repository.SkillRepository;
import com.devportfolio.repository.SocialLinkRepository;
import com.devportfolio.service.CurrentUserService;
import com.devportfolio.service.DashBoardService;

@Service
public class DashBoardServiceImpl implements DashBoardService {

	private CurrentUserService currentUserService;

	private PortfolioRepository portfolioRepository;

	private SkillRepository skillRepository;

	private ProjectRepository projectRepository;

	private ExperienceRepository experienceRepository;

	private EducationRepository educationRepository;

	private CertificationRepository certificationRepository;

	private SocialLinkRepository socialLinkRepository;
	
	private ActivityRepository activityRepository;
	
	private final ProfileCompletionService profileCompletionService;

	public DashBoardServiceImpl(CurrentUserService currentUserService, PortfolioRepository portfolioRepository,
			SkillRepository skillRepository, ProjectRepository projectRepository,
			ExperienceRepository experienceRepository, EducationRepository educationRepository,
			CertificationRepository certificationRepository, SocialLinkRepository socialLinkRepository,ActivityRepository activityRepository
			,ProfileCompletionService profileCompletionService) {

		this.currentUserService = currentUserService;
		this.portfolioRepository = portfolioRepository;
		this.skillRepository = skillRepository;
		this.projectRepository = projectRepository;
		this.experienceRepository = experienceRepository;
		this.educationRepository = educationRepository;
		this.certificationRepository = certificationRepository;
		this.socialLinkRepository = socialLinkRepository;
		this.activityRepository=activityRepository;
		this.profileCompletionService=profileCompletionService;
	}

	@Override
	public ApiResponse<DashBoardResponse> getDashboard() {
		// TODO Auto-generated method stub
		User user = currentUserService.getCurrentUser();

		Optional<Portfolio> optionalPortfolio = portfolioRepository.findByUser(user);

		if (optionalPortfolio.isEmpty()) {

			return new ApiResponse<>(false, "Portfolio not found", null);
		}
		Portfolio portfolio = optionalPortfolio.get();

		DashBoardResponse response = new DashBoardResponse();
		response.setUserName(user.getFullName());

		response.setSkills(
		        (int) skillRepository.countByPortfolio(portfolio));

		response.setProjects(
		        (int) projectRepository.countByPortfolio(portfolio));

		response.setExperiences(
				(int) experienceRepository.countByPortfolio(portfolio));

		response.setEducations(
				(int) educationRepository.countByPortfolio(portfolio));

		response.setCertifications((int)certificationRepository.countByPortfolio(portfolio));

		response.setSocialLinks(socialLinkRepository.findByPortfolio(portfolio).isPresent());

		response.setProfileCompletion(
		        profileCompletionService.calculateCompletion(portfolio)
		);
		
		List<String> pendingTasks = new ArrayList<>();

		if (response.getSkills() == 0) {
		    pendingTasks.add("Add Skills");
		}

		if (response.getProjects() == 0) {
		    pendingTasks.add("Add Projects");
		}

		if (response.getExperiences() == 0) {
		    pendingTasks.add("Add Experience");
		}
		if (response.getEducations() == 0) {
		    pendingTasks.add("Add Education");
		}
		if (response.getCertifications() == 0) {
		    pendingTasks.add("Add Certification");
		}
		if (!response.isSocialLinks()) {
		    pendingTasks.add("Add Social Links");
		}

		if (portfolio.getResumeUrl() == null || portfolio.getResumeUrl().isBlank()) {
		    pendingTasks.add("Upload Resume");
		}

		response.setPendingTasks(pendingTasks);
		
		List<ActivityResponse> activities =
		        activityRepository
		        .findTop10ByPortfolioOrderByCreatedAtDesc(portfolio)
		        .stream()
		        .map(activity -> {

		            ActivityResponse dto =
		                    new ActivityResponse();

		            dto.setMessage(activity.getMessage());
		            dto.setCreatedAt(activity.getCreatedAt());

		            return dto;

		        })
		        .toList();

		response.setRecentActivities(activities);

		return new ApiResponse<>(true, "Dashboard fetched successfully", response);
	}

}
