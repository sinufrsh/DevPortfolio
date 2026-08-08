package com.devportfolio.service.impl;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.SocialLinkRequest;
import com.devportfolio.dto.SocialLinkResponse;
import com.devportfolio.entity.Portfolio;
import com.devportfolio.entity.SocialLink;
import com.devportfolio.entity.User;
import com.devportfolio.repository.PortfolioRepository;
import com.devportfolio.repository.SocialLinkRepository;
import com.devportfolio.service.ActivityService;
import com.devportfolio.service.CurrentUserService;
import com.devportfolio.service.SocialLinkService;

@Service
public class SocialLinkServiceImpl implements SocialLinkService {

    private SocialLinkRepository socialLinkRepository;
    private PortfolioRepository portfolioRepository;
    private CurrentUserService currentUserService;
    private ActivityService activityService;

    public SocialLinkServiceImpl(
            SocialLinkRepository socialLinkRepository,
            PortfolioRepository portfolioRepository,
            CurrentUserService currentUserService,ActivityService activityService) {

        this.socialLinkRepository = socialLinkRepository;
        this.portfolioRepository = portfolioRepository;
        this.currentUserService = currentUserService;
        this.activityService=activityService;
    }

    @Override
    public ApiResponse<SocialLinkResponse> addSocialLinks(SocialLinkRequest request) {

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

        if (socialLinkRepository.findByPortfolio(portfolio).isPresent()) {
            throw new RuntimeException("Social links already exist");
        }

        SocialLink socialLink = new SocialLink();

        socialLink.setGithub(request.getGithub());
        socialLink.setLinkedin(request.getLinkedin());
        socialLink.setLeetcode(request.getLeetcode());
        socialLink.setHackerrank(request.getHackerrank());
        socialLink.setPortfolioWebsite(request.getPortfolioWebsite());
        socialLink.setTwitter(request.getTwitter());
        socialLink.setPortfolio(portfolio);

        SocialLink savedSocialLink = socialLinkRepository.save(socialLink);
        activityService.saveActivity(
                portfolio,
                "Added Social Links"
        );

        SocialLinkResponse response = new SocialLinkResponse();

        response.setId(savedSocialLink.getId());
        response.setGithub(savedSocialLink.getGithub());
        response.setLinkedin(savedSocialLink.getLinkedin());
        response.setLeetcode(savedSocialLink.getLeetcode());
        response.setHackerrank(savedSocialLink.getHackerrank());
        response.setPortfolioWebsite(savedSocialLink.getPortfolioWebsite());
        response.setTwitter(savedSocialLink.getTwitter());

        return new ApiResponse<>(
                true,
                "Social links added successfully",
                response
        );
    }

    @Override
    public ApiResponse<SocialLinkResponse> getSocialLinks() {

        User user = currentUserService.getCurrentUser();

        Portfolio portfolio = portfolioRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Portfolio not found"));

        Optional<SocialLink> optionalSocialLink =
                socialLinkRepository.findByPortfolio(portfolio);

        if (optionalSocialLink.isEmpty()) {
            return new ApiResponse<>(
                    true,
                    "No social links found",
                    null
            );
        }

        SocialLink socialLink = optionalSocialLink.get();

        SocialLinkResponse response = new SocialLinkResponse();

        response.setId(socialLink.getId());
        response.setGithub(socialLink.getGithub());
        response.setLinkedin(socialLink.getLinkedin());
        response.setLeetcode(socialLink.getLeetcode());
        response.setHackerrank(socialLink.getHackerrank());
        response.setPortfolioWebsite(socialLink.getPortfolioWebsite());
        response.setTwitter(socialLink.getTwitter());

        return new ApiResponse<>(
                true,
                "Social links fetched successfully",
                response
        );
    }
    @Override
    public ApiResponse<SocialLinkResponse> updateSocialLinks(SocialLinkRequest request) {

        User user = currentUserService.getCurrentUser();

        Portfolio portfolio = portfolioRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Portfolio not found"));

        SocialLink socialLink = socialLinkRepository.findByPortfolio(portfolio)
                .orElseThrow(() -> new RuntimeException("Social links not found"));

        socialLink.setGithub(request.getGithub());
        socialLink.setLinkedin(request.getLinkedin());
        socialLink.setLeetcode(request.getLeetcode());
        socialLink.setHackerrank(request.getHackerrank());
        socialLink.setPortfolioWebsite(request.getPortfolioWebsite());
        socialLink.setTwitter(request.getTwitter());

        SocialLink updatedSocialLink = socialLinkRepository.save(socialLink);

        activityService.saveActivity(
                portfolio,
                "Updated Social Links"
        );
        SocialLinkResponse response = new SocialLinkResponse();

        response.setId(updatedSocialLink.getId());
        response.setGithub(updatedSocialLink.getGithub());
        response.setLinkedin(updatedSocialLink.getLinkedin());
        response.setLeetcode(updatedSocialLink.getLeetcode());
        response.setHackerrank(updatedSocialLink.getHackerrank());
        response.setPortfolioWebsite(updatedSocialLink.getPortfolioWebsite());
        response.setTwitter(updatedSocialLink.getTwitter());

        return new ApiResponse<>(
                true,
                "Social links updated successfully",
                response
        );
    }

    @Override
    public ApiResponse<Void> deleteSocialLinks() {

        User user = currentUserService.getCurrentUser();

        Portfolio portfolio = portfolioRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Portfolio not found"));

        SocialLink socialLink = socialLinkRepository.findByPortfolio(portfolio)
                .orElseThrow(() -> new RuntimeException("Social links not found"));

        socialLinkRepository.delete(socialLink);

        activityService.saveActivity(
                portfolio,
                "Deleted Social Links"
        );

        return new ApiResponse<>(
                true,
                "Social links deleted successfully",
                null
        );
    }
}