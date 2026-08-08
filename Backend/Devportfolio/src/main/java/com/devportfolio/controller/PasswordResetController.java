package com.devportfolio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.ForgotPasswordRequest;
import com.devportfolio.dto.ResetPasswordRequest;
import com.devportfolio.dto.VerifyOtpRequest;
import com.devportfolio.service.PasswordResetService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class PasswordResetController {

    private final PasswordResetService passwordResetService;

    public PasswordResetController(
            PasswordResetService passwordResetService) {

        this.passwordResetService = passwordResetService;
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<ApiResponse<Void>> sendOtp(
            @Valid @RequestBody ForgotPasswordRequest request) {

        return ResponseEntity.ok(
                passwordResetService.sendOtp(request)
        );
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<ApiResponse<Void>> verifyOtp(
            @Valid @RequestBody VerifyOtpRequest request) {

        return ResponseEntity.ok(
                passwordResetService.verifyOtp(request)
        );
    }

    @PostMapping("/reset-password")
    public ResponseEntity<ApiResponse<Void>> resetPassword(
            @Valid @RequestBody ResetPasswordRequest request) {

        return ResponseEntity.ok(
                passwordResetService.resetPassword(request)
        );
    }
}