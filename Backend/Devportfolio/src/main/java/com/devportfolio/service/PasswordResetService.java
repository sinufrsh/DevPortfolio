package com.devportfolio.service;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.ForgotPasswordRequest;
import com.devportfolio.dto.ResetPasswordRequest;
import com.devportfolio.dto.VerifyOtpRequest;

public interface PasswordResetService {

    ApiResponse<Void> sendOtp(ForgotPasswordRequest request);

    ApiResponse<Void> verifyOtp(VerifyOtpRequest request);

    ApiResponse<Void> resetPassword(ResetPasswordRequest request);
}