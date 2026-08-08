package com.devportfolio.service.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.LoginRequest;
import com.devportfolio.dto.LoginResponse;
import com.devportfolio.dto.RegisterRequest;
import com.devportfolio.entity.User;
import com.devportfolio.exception.InvalidCredentialsException;
import com.devportfolio.exception.ResourceAlreadyExistsException;
import com.devportfolio.repository.UserRepository;
import com.devportfolio.service.AuthService;
import com.devportfolio.service.JwtService;

@Service
public class AuthServiceimpl implements AuthService{
	
	 private final UserRepository userRepository;
	    private final PasswordEncoder passwordEncoder;
	    
	    private final JwtService jwtService;

	    public AuthServiceimpl(UserRepository userRepository,
	                           PasswordEncoder passwordEncoder,JwtService jwtService) {
	        this.userRepository = userRepository;
	        this.passwordEncoder = passwordEncoder;
	        this.jwtService=jwtService;
	    }

	@Override
	public  ApiResponse register(RegisterRequest request) {
		// TODO Auto-generated method stub
		if(userRepository.existsByEmail(request.getEmail())){
		    throw new ResourceAlreadyExistsException("Email already exists");
		}
		
		User user=new User();
		user.setFullName(request.getFullName());
		user.setEmail(request.getEmail());
		
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		userRepository.save(user);
		return new ApiResponse<>(
		        true,
		        "User registered successfully",
		        null
		);
	}

	@Override
	public ApiResponse<String> login(LoginRequest request) {

	    User user = userRepository.findByEmail(request.getEmail())
	    		.orElseThrow(() ->
	            new InvalidCredentialsException("Invalid email or password"));

	    if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
	    	throw new InvalidCredentialsException("Invalid email or password");
	    }

	    String token = jwtService.generateToken(user.getEmail());

	    return new ApiResponse<>(
	            true,
	            "Login successful",
	            token
	    );
	}



}
