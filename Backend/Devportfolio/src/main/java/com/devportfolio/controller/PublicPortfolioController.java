package com.devportfolio.controller;

import org.springframework.web.bind.annotation.*;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.PublicPortfolioResponse;
import com.devportfolio.service.PortfolioService;

@RestController
@RequestMapping("/api/public")
public class PublicPortfolioController {

    private PortfolioService portfolioService;

    public PublicPortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping("/{username}")
    public ApiResponse<PublicPortfolioResponse> getPublicPortfolio(
            @PathVariable String username) {

        return portfolioService.getPublicPortfolio(username);
    }
}