package com.devportfolio.service;

import java.util.List;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.SkillRequest;
import com.devportfolio.dto.SkillResponse;

public interface SkillService {

    ApiResponse<SkillResponse> addSkill(SkillRequest request);

    ApiResponse<List<SkillResponse>> getSkills();

    ApiResponse<SkillResponse> updateSkill(Long id, SkillRequest request);

    ApiResponse<Void> deleteSkill(Long id);
    
    

}