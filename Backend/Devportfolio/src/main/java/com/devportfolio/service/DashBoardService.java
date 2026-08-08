package com.devportfolio.service;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.DashBoardResponse;

public interface DashBoardService {

    ApiResponse<DashBoardResponse> getDashboard();

}