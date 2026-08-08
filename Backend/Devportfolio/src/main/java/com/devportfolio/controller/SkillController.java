package com.devportfolio.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.SkillRequest;
import com.devportfolio.dto.SkillResponse;
import com.devportfolio.service.SkillService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/skills")
public class SkillController {

    private SkillService skillService;

    public SkillController(SkillService skillService) {
        this.skillService = skillService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<SkillResponse>> addSkill(
            @Valid @RequestBody SkillRequest request) {

        ApiResponse<SkillResponse> response =
                skillService.addSkill(request);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
    
    @GetMapping
    public ResponseEntity<ApiResponse<List<SkillResponse>>> getSkills(){

        ApiResponse<List<SkillResponse>> response =
                skillService.getSkills();

        return ResponseEntity.ok(response);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<SkillResponse>> updateSkill(
            @PathVariable Long id,
            @Valid @RequestBody SkillRequest request){

        ApiResponse<SkillResponse> response =
                skillService.updateSkill(id, request);

        return ResponseEntity.ok(response);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteSkill(
            @PathVariable Long id){

        ApiResponse<Void> response =
                skillService.deleteSkill(id);

        return ResponseEntity.ok(response);
    }

}