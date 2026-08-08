package com.devportfolio.service.impl;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.CertificationResponse;
import com.devportfolio.dto.EducationResponse;
import com.devportfolio.dto.ExperienceResponse;
import com.devportfolio.dto.PortfolioRequest;
import com.devportfolio.dto.PortfolioResponse;
import com.devportfolio.dto.ProjectResponse;
import com.devportfolio.dto.PublicPortfolioResponse;
import com.devportfolio.dto.SkillResponse;
import com.devportfolio.dto.SocialLinkResponse;
import com.devportfolio.entity.Certification;
import com.devportfolio.entity.Education;
import com.devportfolio.entity.Experience;
import com.devportfolio.entity.Portfolio;
import com.devportfolio.entity.Project;
import com.devportfolio.entity.Skill;
import com.devportfolio.entity.User;
import com.devportfolio.exception.ResourceAlreadyExistsException;
import com.devportfolio.exception.ResourceNotFoundException;
import com.devportfolio.repository.PortfolioRepository;
import com.devportfolio.repository.UserRepository;
import com.devportfolio.service.ActivityService;
import com.devportfolio.service.CurrentUserService;
import com.devportfolio.service.PortfolioService;

@Service
public class PortfolioServiceImpl implements PortfolioService{
	
	 private UserRepository userRepository;
	 private PortfolioRepository portfolioRepository;
	 private ActivityService activityService;
	 private CurrentUserService currentUserService;
	 private final ProfileCompletionService profileCompletionService;
	 
	 
	 public PortfolioServiceImpl(
		        UserRepository userRepository,
		        PortfolioRepository portfolioRepository,
		        ActivityService activityService,CurrentUserService currentUserService,
		        ProfileCompletionService profileCompletionService) {

		    this.userRepository = userRepository;
		    this.portfolioRepository = portfolioRepository;
		    this.activityService = activityService;
		    this.currentUserService=currentUserService;
		    this.profileCompletionService=profileCompletionService;
		}
	 
	 

	@Override
	public ApiResponse<PortfolioResponse> createPortfolio(PortfolioRequest request) {
		// TODO Auto-generated method stub
	  Authentication authentication=	SecurityContextHolder.getContext().getAuthentication();
	String email=  authentication.getName();
	
	User user=userRepository.findByEmail(email)
	.orElseThrow(()->new RuntimeException("user not found"));
	
	  Optional<Portfolio> existingPortfolio=  portfolioRepository.findByUser(user);
	  
	  if(existingPortfolio.isPresent()) {
	        throw new ResourceAlreadyExistsException(
	                "Portfolio already exists for this user");
	    }
	  
	  Portfolio portfolio = new Portfolio();

	    portfolio.setHeadline(request.getHeadline());
	    portfolio.setBio(request.getBio());
	    portfolio.setLocation(request.getLocation());
	   
	    portfolio.setTheme(request.getTheme());
	    portfolio.setUsername(request.getUsername());
	    
	    portfolio.setUser(user);
	    
	 //   portfolio.setProfileImageUrl(request.getProfileImageUrl());
	    portfolio.setPublished(request.getPublished());
	    portfolio.setPhone(request.getPhone());
	    
	    Portfolio savedPortfolio = portfolioRepository.save(portfolio);
	    activityService.saveActivity(
	            savedPortfolio,
	            "Created portfolio"
	    );

	    PortfolioResponse response = new PortfolioResponse();

	    response.setId(savedPortfolio.getId());
	    response.setHeadline(savedPortfolio.getHeadline());
	    response.setBio(savedPortfolio.getBio());
	    response.setLocation(savedPortfolio.getLocation());
	   
	    response.setTheme(savedPortfolio.getTheme());
	    response.setUsername(savedPortfolio.getUsername());
	    
	    return new ApiResponse<>(
	            true,
	            "Portfolio created successfully",
	            response
	    );
	}

	@Override
	public ApiResponse<PortfolioResponse> getPortfolio() {

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

	    PortfolioResponse response = new PortfolioResponse();

	    response.setId(portfolio.getId());
	    response.setHeadline(portfolio.getHeadline());
	    response.setBio(portfolio.getBio());
	    response.setLocation(portfolio.getLocation());
	   
	    response.setTheme(portfolio.getTheme());
	    
	    response.setUsername(portfolio.getUsername());
	    response.setProfileImageUrl(portfolio.getProfileImageUrl());
	    response.setPublished(portfolio.getPublished());
	    response.setPhone(portfolio.getPhone());
	    response.setResumeUrl(portfolio.getResumeUrl());
	    response.setProfileImageUrl(portfolio.getProfileImageUrl());

	    return new ApiResponse<>(
	            true,
	            "Portfolio fetched successfully",
	            response
	    );
	}

	@Override
	public ApiResponse<PortfolioResponse> updatePortfolio(PortfolioRequest request) {

	    Authentication authentication =
	            SecurityContextHolder.getContext().getAuthentication();

	    String email = authentication.getName();

	    User user = userRepository.findByEmail(email)
	            .orElseThrow(() -> new RuntimeException("User not found"));

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

	    portfolio.setHeadline(request.getHeadline());
	    portfolio.setBio(request.getBio());
	    portfolio.setLocation(request.getLocation());
	   
	    portfolio.setTheme(request.getTheme());
	    portfolio.setUsername(request.getUsername());
	    
	//    portfolio.setProfileImageUrl(request.getProfileImageUrl());
	    portfolio.setPublished(request.getPublished());
	    portfolio.setPhone(request.getPhone());
	    

	    Portfolio updatedPortfolio = portfolioRepository.save(portfolio);
	    activityService.saveActivity(
	            updatedPortfolio,
	            "Updated profile information"
	    );

	    PortfolioResponse response = new PortfolioResponse();

	    response.setId(updatedPortfolio.getId());
	    response.setHeadline(updatedPortfolio.getHeadline());
	    response.setBio(updatedPortfolio.getBio());
	    response.setLocation(updatedPortfolio.getLocation());
	    
	    response.setTheme(updatedPortfolio.getTheme());
	    
	    response.setUsername(portfolio.getUsername());
	    response.setProfileImageUrl(portfolio.getProfileImageUrl());
	    response.setPublished(portfolio.getPublished());
	    
	   
	    return new ApiResponse<>(
	            true,
	            "Portfolio updated successfully",
	            response
	    );
	}

	@Override
	public ApiResponse<Void> deletePortfolio() {

	    Authentication authentication =
	            SecurityContextHolder.getContext().getAuthentication();

	    String email = authentication.getName();

	    User user = userRepository.findByEmail(email)
	            .orElseThrow(() -> new RuntimeException("User not found"));

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

	    activityService.saveActivity(
	            portfolio,
	            "Deleted portfolio"
	    );

	    return new ApiResponse<>(
	            true,
	            "Portfolio deleted successfully",
	            null
	    );
	}
	
	@Override
	public ApiResponse<PublicPortfolioResponse> previewPortfolio() {

	    Authentication authentication =
	            SecurityContextHolder.getContext().getAuthentication();

	    String email = authentication.getName();

	    User user = userRepository.findByEmail(email)
	            .orElseThrow(() -> new RuntimeException("User not found"));

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

	    PublicPortfolioResponse response = new PublicPortfolioResponse();

	    response.setUsername(portfolio.getUsername());
	    response.setHeadline(portfolio.getHeadline());
	    response.setBio(portfolio.getBio());
	    response.setLocation(portfolio.getLocation());
	    response.setTheme(portfolio.getTheme());
	    response.setProfileImageUrl(portfolio.getProfileImageUrl());
	    
	    response.setPhone(portfolio.getPhone());
	    response.setEmail(user.getEmail());
	    response.setResumeUrl(portfolio.getResumeUrl());
	    response.setProfileImageUrl(portfolio.getProfileImageUrl());
	    
	    List<SkillResponse> skillResponses = new ArrayList<>();

        for (Skill skill : portfolio.getSkills()) {

            SkillResponse skillResponse = new SkillResponse();

            skillResponse.setId(skill.getId());
            skillResponse.setName(skill.getName());
            skillResponse.setLevel(skill.getLevel());

            skillResponses.add(skillResponse);
        }

        response.setSkills(skillResponses);
        
        List<ProjectResponse> projectResponses = new ArrayList<>();

        for(Project project : portfolio.getProjects()){

            ProjectResponse dto = new ProjectResponse();

            dto.setId(project.getId());
            dto.setTitle(project.getTitle());
            dto.setDescription(project.getDescription());
            dto.setTechnologies(project.getTechnologies());
            dto.setGithubUrl(project.getGithubUrl());
            dto.setLiveDemoUrl(project.getLiveDemoUrl());
            dto.setImageUrl(project.getImageUrl());

            projectResponses.add(dto);
        }

        response.setProjects(projectResponses);
        
        
        List<ExperienceResponse> experienceResponses = new ArrayList<>();

        for (Experience experience : portfolio.getExperiences()) {

            ExperienceResponse dto = new ExperienceResponse();

            dto.setId(experience.getId());
            dto.setCompanyName(experience.getCompanyName());
            dto.setJobTitle(experience.getJobTitle());
            dto.setLocation(experience.getLocation());
            dto.setStartDate(experience.getStartDate());
            dto.setEndDate(experience.getEndDate());
            dto.setDescription(experience.getDescription());

            experienceResponses.add(dto);
        }

        response.setExperiences(experienceResponses);
        
        List<EducationResponse> educationResponses = new ArrayList<>();

        for (Education education : portfolio.getEducations()) {

            EducationResponse dto = new EducationResponse();

            dto.setId(education.getId());
            dto.setInstitutionName(education.getInstitutionName());
            dto.setDegree(education.getDegree());
            dto.setFieldOfStudy(education.getFieldOfStudy());
            dto.setStartYear(education.getStartYear());
            dto.setEndYear(education.getEndYear());
            dto.setGrade(education.getGrade());
            dto.setDescription(education.getDescription());

            educationResponses.add(dto);
        }

        response.setEducations(educationResponses);
        
        List<CertificationResponse> certificationResponses = new ArrayList<>();

        for (Certification certification : portfolio.getCertifications()) {

            CertificationResponse dto = new CertificationResponse();

            dto.setId(certification.getId());
            dto.setCertificateName(certification.getCertificateName());
            dto.setOrganization(certification.getOrganization());
            dto.setIssueDate(certification.getIssueDate());
            dto.setCredentialUrl(certification.getCredentialUrl());

            certificationResponses.add(dto);
        }

        response.setCertifications(certificationResponses);
        
        if (portfolio.getSocialLink() != null) {

            SocialLinkResponse socialResponse = new SocialLinkResponse();

            socialResponse.setId(portfolio.getSocialLink().getId());
            socialResponse.setGithub(portfolio.getSocialLink().getGithub());
            socialResponse.setLinkedin(portfolio.getSocialLink().getLinkedin());
            socialResponse.setLeetcode(portfolio.getSocialLink().getLeetcode());
            socialResponse.setHackerrank(portfolio.getSocialLink().getHackerrank());
            socialResponse.setPortfolioWebsite(portfolio.getSocialLink().getPortfolioWebsite());
            socialResponse.setTwitter(portfolio.getSocialLink().getTwitter());

            response.setSocialLinks(socialResponse);
        }

	    return new ApiResponse<>(
	            true,
	            "Preview fetched successfully",
	            response
	    );
	}



	@Override
	public ApiResponse<Void> publishPortfolio() {

	    User user = currentUserService.getCurrentUser();

	    Portfolio portfolio = portfolioRepository.findByUser(user)
	            .orElseThrow(() -> new RuntimeException("Portfolio not found"));

	    if (portfolio.getUsername() == null || portfolio.getUsername().isBlank()) {
	        return new ApiResponse<>(false, "Complete your profile first.", null);
	    }

	    if (portfolio.getSkills().isEmpty()) {
	        return new ApiResponse<>(false, "Add at least one skill.", null);
	    }

	    if (portfolio.getProjects().isEmpty()) {
	        return new ApiResponse<>(false, "Add at least one project.", null);
	    }

	    if (portfolio.getExperiences().isEmpty()) {
	        return new ApiResponse<>(false, "Add at least one experience.", null);
	    }

	    if (portfolio.getEducations().isEmpty()) {
	        return new ApiResponse<>(false, "Add at least one education.", null);
	    }

	    if (portfolio.getSocialLink() == null) {
	        return new ApiResponse<>(false, "Add your social links.", null);
	    }

	    int completion = profileCompletionService.calculateCompletion(portfolio);

	    if (completion < 100) {
	        return new ApiResponse<>(
	                false,
	                "Complete your profile before publishing.",
	                null
	        );
	    }
	    portfolio.setPublished(true);

	    portfolioRepository.save(portfolio);

	    activityService.saveActivity(
	            portfolio,
	            "Published Portfolio"
	    );

	    return new ApiResponse<>(
	            true,
	            "Portfolio published successfully.",
	            null
	    );
	}



	@Override
	public ApiResponse<Void> unpublishPortfolio() {

	    User user = currentUserService.getCurrentUser();

	    Portfolio portfolio = portfolioRepository.findByUser(user)
	            .orElseThrow(() -> new RuntimeException("Portfolio not found"));

	    portfolio.setPublished(false);

	    portfolioRepository.save(portfolio);
	    
	    activityService.saveActivity(
	            portfolio,
	            "Unpublished Portfolio"
	    );
	    return new ApiResponse<>(
	            true,
	            "Portfolio unpublished successfully",
	            null
	    );
	}



	@Override
	public ApiResponse<PublicPortfolioResponse> getPublicPortfolio(String username) {

	    Portfolio portfolio = portfolioRepository.findByUsername(username)
	            .orElseThrow(() -> new ResourceNotFoundException("Portfolio not found"));

	    if (!portfolio.getPublished()) {

	        return new ApiResponse<>(
	                false,
	                "This portfolio is not published",
	                null
	        );
	    }
	    PublicPortfolioResponse response = new PublicPortfolioResponse();

	    response.setUsername(portfolio.getUsername());
	    response.setHeadline(portfolio.getHeadline());
	    response.setBio(portfolio.getBio());
	    response.setLocation(portfolio.getLocation());
	    response.setTheme(portfolio.getTheme());
	    response.setProfileImageUrl(portfolio.getProfileImageUrl());
	    
	    response.setPhone(portfolio.getPhone());
	    response.setEmail(portfolio.getUser().getEmail());
	    response.setResumeUrl(portfolio.getResumeUrl());
	    response.setProfileImageUrl(portfolio.getProfileImageUrl());
	    
	    List<SkillResponse> skillResponses = new ArrayList<>();

        for (Skill skill : portfolio.getSkills()) {

            SkillResponse skillResponse = new SkillResponse();

            skillResponse.setId(skill.getId());
            skillResponse.setName(skill.getName());
            skillResponse.setLevel(skill.getLevel());

            skillResponses.add(skillResponse);
        }

        response.setSkills(skillResponses);
        
        List<ProjectResponse> projectResponses = new ArrayList<>();

        for(Project project : portfolio.getProjects()){

            ProjectResponse dto = new ProjectResponse();

            dto.setId(project.getId());
            dto.setTitle(project.getTitle());
            dto.setDescription(project.getDescription());
            dto.setTechnologies(project.getTechnologies());
            dto.setGithubUrl(project.getGithubUrl());
            dto.setLiveDemoUrl(project.getLiveDemoUrl());
            dto.setImageUrl(project.getImageUrl());

            projectResponses.add(dto);
        }

        response.setProjects(projectResponses);
        
        
        List<ExperienceResponse> experienceResponses = new ArrayList<>();

        for (Experience experience : portfolio.getExperiences()) {

            ExperienceResponse dto = new ExperienceResponse();

            dto.setId(experience.getId());
            dto.setCompanyName(experience.getCompanyName());
            dto.setJobTitle(experience.getJobTitle());
            dto.setLocation(experience.getLocation());
            dto.setStartDate(experience.getStartDate());
            dto.setEndDate(experience.getEndDate());
            dto.setDescription(experience.getDescription());

            experienceResponses.add(dto);
        }

        response.setExperiences(experienceResponses);
        
        List<EducationResponse> educationResponses = new ArrayList<>();

        for (Education education : portfolio.getEducations()) {

            EducationResponse dto = new EducationResponse();

            dto.setId(education.getId());
            dto.setInstitutionName(education.getInstitutionName());
            dto.setDegree(education.getDegree());
            dto.setFieldOfStudy(education.getFieldOfStudy());
            dto.setStartYear(education.getStartYear());
            dto.setEndYear(education.getEndYear());
            dto.setGrade(education.getGrade());
            dto.setDescription(education.getDescription());

            educationResponses.add(dto);
        }

        response.setEducations(educationResponses);
        
        List<CertificationResponse> certificationResponses = new ArrayList<>();

        for (Certification certification : portfolio.getCertifications()) {

            CertificationResponse dto = new CertificationResponse();

            dto.setId(certification.getId());
            dto.setCertificateName(certification.getCertificateName());
            dto.setOrganization(certification.getOrganization());
            dto.setIssueDate(certification.getIssueDate());
            dto.setCredentialUrl(certification.getCredentialUrl());

            certificationResponses.add(dto);
        }

        response.setCertifications(certificationResponses);
        
        if (portfolio.getSocialLink() != null) {

            SocialLinkResponse socialResponse = new SocialLinkResponse();

            socialResponse.setId(portfolio.getSocialLink().getId());
            socialResponse.setGithub(portfolio.getSocialLink().getGithub());
            socialResponse.setLinkedin(portfolio.getSocialLink().getLinkedin());
            socialResponse.setLeetcode(portfolio.getSocialLink().getLeetcode());
            socialResponse.setHackerrank(portfolio.getSocialLink().getHackerrank());
            socialResponse.setPortfolioWebsite(portfolio.getSocialLink().getPortfolioWebsite());
            socialResponse.setTwitter(portfolio.getSocialLink().getTwitter());

            response.setSocialLinks(socialResponse);
        }

        return new ApiResponse<>(
                true,
                "Public portfolio fetched successfully",
                response
        );

	   
	}
	
	

}
