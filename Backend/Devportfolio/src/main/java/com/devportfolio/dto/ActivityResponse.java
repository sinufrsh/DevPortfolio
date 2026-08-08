package com.devportfolio.dto;

import java.time.LocalDateTime;

public class ActivityResponse {

    private String message;
    private LocalDateTime createdAt;
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
    
    

    // getters setters
}