package com.devportfolio.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.PortfolioRequest;
import com.devportfolio.dto.PortfolioResponse;
import com.devportfolio.dto.PublicPortfolioResponse;
import com.devportfolio.service.PortfolioService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {

    private PortfolioService portfolioService;
    

    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<PortfolioResponse>> createPortfolio(
            @Valid @RequestBody PortfolioRequest request) {

        ApiResponse<PortfolioResponse> response =
                portfolioService.createPortfolio(request);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
    
    @GetMapping
    public ResponseEntity<ApiResponse<PortfolioResponse>> getPortfolio() {

        ApiResponse<PortfolioResponse> response =
                portfolioService.getPortfolio();

        return ResponseEntity.ok(response);
    }
    
    @PutMapping
    public ResponseEntity<ApiResponse<PortfolioResponse>> updatePortfolio(
            @Valid @RequestBody PortfolioRequest request){

        ApiResponse<PortfolioResponse> response =
                portfolioService.updatePortfolio(request);

        return ResponseEntity.ok(response);
    }
    
    @DeleteMapping
    public ResponseEntity<ApiResponse<Void>> deletePortfolio(){

        ApiResponse<Void> response =
                portfolioService.deletePortfolio();

        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/preview")
    public ResponseEntity<ApiResponse<PublicPortfolioResponse>> previewPortfolio() {

        ApiResponse<PublicPortfolioResponse> response =
                portfolioService.previewPortfolio();

        return ResponseEntity.ok(response);
    }
    
    @PutMapping("/publish")
    public ResponseEntity<ApiResponse<Void>> publishPortfolio() {

        return ResponseEntity.ok(
                portfolioService.publishPortfolio()
        );
    }

    @PutMapping("/unpublish")
    public ResponseEntity<ApiResponse<Void>> unpublishPortfolio() {

        return ResponseEntity.ok(
                portfolioService.unpublishPortfolio()
        );
    }
    
    

}