package com.devportfolio.service;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.PortfolioRequest;
import com.devportfolio.dto.PortfolioResponse;
import com.devportfolio.dto.PublicPortfolioResponse;

public interface PortfolioService {

    ApiResponse<PortfolioResponse> createPortfolio(
            PortfolioRequest request);

    ApiResponse<PortfolioResponse> getPortfolio();

    ApiResponse<PortfolioResponse> updatePortfolio(
            PortfolioRequest request);

    ApiResponse<Void> deletePortfolio();
    
    ApiResponse<PublicPortfolioResponse> previewPortfolio();
    
    ApiResponse<Void> publishPortfolio();

    ApiResponse<Void> unpublishPortfolio();
    
    ApiResponse<PublicPortfolioResponse> getPublicPortfolio(String username);

}