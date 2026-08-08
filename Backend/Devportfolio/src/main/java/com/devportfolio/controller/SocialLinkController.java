package com.devportfolio.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.SocialLinkRequest;
import com.devportfolio.dto.SocialLinkResponse;
import com.devportfolio.service.SocialLinkService;

@RestController
@RequestMapping("/api/social-links")
public class SocialLinkController {

    private SocialLinkService socialLinkService;

    public SocialLinkController(SocialLinkService socialLinkService) {
        this.socialLinkService = socialLinkService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<SocialLinkResponse>> addSocialLinks(
            @RequestBody SocialLinkRequest request) {

        return new ResponseEntity<>(
                socialLinkService.addSocialLinks(request),
                HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<ApiResponse<SocialLinkResponse>> getSocialLinks() {

        return ResponseEntity.ok(
                socialLinkService.getSocialLinks());
    }

    @PutMapping
    public ResponseEntity<ApiResponse<SocialLinkResponse>> updateSocialLinks(
            @RequestBody SocialLinkRequest request) {

        return ResponseEntity.ok(
                socialLinkService.updateSocialLinks(request));
    }

    @DeleteMapping
    public ResponseEntity<ApiResponse<Void>> deleteSocialLinks() {

        return ResponseEntity.ok(
                socialLinkService.deleteSocialLinks());
    }
}