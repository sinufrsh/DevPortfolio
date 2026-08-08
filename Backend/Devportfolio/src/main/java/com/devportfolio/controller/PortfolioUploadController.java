package com.devportfolio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.entity.Portfolio;
import com.devportfolio.entity.User;
import com.devportfolio.repository.PortfolioRepository;
import com.devportfolio.repository.UserRepository;
import com.devportfolio.service.file.FileStorageService;

@RestController
@RequestMapping("/api/portfolio/upload")
@CrossOrigin(origins = "http://localhost:5173")
public class PortfolioUploadController {

    private final FileStorageService fileStorageService;
    private final PortfolioRepository portfolioRepository;
    private final UserRepository userRepository;

    public PortfolioUploadController(
            FileStorageService fileStorageService,
            PortfolioRepository portfolioRepository,
            UserRepository userRepository) {

        this.fileStorageService = fileStorageService;
        this.portfolioRepository = portfolioRepository;
        this.userRepository = userRepository;
    }
    
    @PostMapping("/profile-image")
    public ResponseEntity<ApiResponse<String>> uploadProfileImage(
            @RequestParam("file") MultipartFile file) {

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Portfolio portfolio = portfolioRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Portfolio not found"));

        String imageUrl = fileStorageService.uploadProfileImage(file);

        portfolio.setProfileImageUrl(imageUrl);

        portfolioRepository.save(portfolio);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Profile image uploaded successfully",
                        imageUrl
                )
        );
    }
    @PostMapping("/resume")
    public ResponseEntity<ApiResponse<String>> uploadResume(
            @RequestParam("file") MultipartFile file) {

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Portfolio portfolio = portfolioRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Portfolio not found"));

        String resumeUrl = fileStorageService.uploadResume(file);

        portfolio.setResumeUrl(resumeUrl);

        portfolioRepository.save(portfolio);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Resume uploaded successfully",
                        resumeUrl
                )
        );
    }

}