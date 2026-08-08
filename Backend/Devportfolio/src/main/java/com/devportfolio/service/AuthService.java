package com.devportfolio.service;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.LoginRequest;
import com.devportfolio.dto.LoginResponse;
import com.devportfolio.dto.RegisterRequest;

public interface AuthService {

	ApiResponse<Void> register(RegisterRequest request);
    
   ApiResponse<String> login(LoginRequest request);

}