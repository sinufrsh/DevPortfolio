package com.devportfolio.service.file;

import org.springframework.web.multipart.MultipartFile;

public interface FileStorageService {

    String uploadProfileImage(MultipartFile file);

    String uploadResume(MultipartFile file);

    String uploadProjectImage(MultipartFile file);

}