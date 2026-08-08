package com.devportfolio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.DashBoardResponse;
import com.devportfolio.service.DashBoardService;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final DashBoardService dashboardService;

    public DashboardController(DashBoardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<DashBoardResponse>> getDashboard() {

        return ResponseEntity.ok(
                dashboardService.getDashboard());
    }
}