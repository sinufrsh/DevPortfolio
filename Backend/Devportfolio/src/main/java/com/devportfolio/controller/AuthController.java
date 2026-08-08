package com.devportfolio.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.LoginRequest;
import com.devportfolio.dto.RegisterRequest;
import com.devportfolio.service.AuthService;

import jakarta.validation.Valid;
@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
	
	private AuthService authService;
	
	public AuthController(AuthService authService) {
        this.authService = authService;
    }
	
	@PostMapping("/register")
	public ResponseEntity<ApiResponse<Void>> register(
	        @Valid @RequestBody RegisterRequest request) {

	    ApiResponse<Void> response = authService.register(request);

	    return new ResponseEntity<>(response, HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	public ResponseEntity<ApiResponse<String>> login(
	        @Valid @RequestBody LoginRequest request){

	    System.out.println("===== LOGIN API HIT =====");

	    ApiResponse<String> response = authService.login(request);

	    return ResponseEntity.ok(response);
	}

}
