package com.devportfolio.service.file.impl;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

import com.devportfolio.service.file.FileStorageService;

@Service
public class FileStorageServiceImpl implements FileStorageService {

	private static final String PROFILE_FOLDER = "uploads/profile/";
	private static final String RESUME_FOLDER = "uploads/resume/";
	private static final String PROJECT_FOLDER = "uploads/projects/";
	
	private String upload(MultipartFile file, String folder) {

	    if (file.isEmpty()) {
	        throw new RuntimeException("File is empty");
	    }

	    try {

	        Path uploadPath = Paths.get(folder);

	        if (!Files.exists(uploadPath)) {
	            Files.createDirectories(uploadPath);
	        }

	        String originalFileName = file.getOriginalFilename();

	        String fileName = UUID.randomUUID() + "_" + originalFileName;

	        Path filePath = uploadPath.resolve(fileName);

	        Files.copy(
	                file.getInputStream(),
	                filePath,
	                StandardCopyOption.REPLACE_EXISTING
	        );
	        System.out.println(uploadPath.toAbsolutePath());

	        return "/" + folder + fileName;

	    } catch (IOException e) {

	        throw new RuntimeException("Could not upload file", e);

	    }
	}
	
	@Override
	public String uploadProfileImage(MultipartFile file) {
	    return upload(file, PROFILE_FOLDER);
	}

	@Override
	public String uploadResume(MultipartFile file) {
	    return upload(file, RESUME_FOLDER);
	}

	@Override
	public String uploadProjectImage(MultipartFile file) {
	    return upload(file, PROJECT_FOLDER);
	}
}