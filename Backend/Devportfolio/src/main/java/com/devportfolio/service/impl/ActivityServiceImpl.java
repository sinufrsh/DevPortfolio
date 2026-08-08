package com.devportfolio.service.impl;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.devportfolio.entity.Activity;
import com.devportfolio.entity.Portfolio;
import com.devportfolio.repository.ActivityRepository;
import com.devportfolio.service.ActivityService;

@Service
public class ActivityServiceImpl implements ActivityService{
	
	private ActivityRepository activityRepository;
	
	

	public ActivityServiceImpl(ActivityRepository activityRepository) {
	
		this.activityRepository = activityRepository;
	}



	@Override
	public void saveActivity(Portfolio portfolio, String message) {
		// TODO Auto-generated method stub
		
		Activity activity = new Activity();

		activity.setPortfolio(portfolio);
		activity.setMessage(message);
		activity.setCreatedAt(LocalDateTime.now());
		

		activityRepository.save(activity);
		
	}

}
