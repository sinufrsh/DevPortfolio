package com.devportfolio.service;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.PublicPortfolioResponse;

public interface PublicPortfolioService {

    ApiResponse<PublicPortfolioResponse> getPortfolio(String username);

}