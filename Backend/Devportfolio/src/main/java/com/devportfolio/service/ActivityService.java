package com.devportfolio.service;

import com.devportfolio.entity.Portfolio;

public interface ActivityService {
	void saveActivity(Portfolio portfolio,
            String message);

}
