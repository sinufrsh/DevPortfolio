package com.devportfolio.service;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.SocialLinkRequest;
import com.devportfolio.dto.SocialLinkResponse;

public interface SocialLinkService {

    ApiResponse<SocialLinkResponse> addSocialLinks(SocialLinkRequest request);

    ApiResponse<SocialLinkResponse> getSocialLinks();

    ApiResponse<SocialLinkResponse> updateSocialLinks(SocialLinkRequest request);

    ApiResponse<Void> deleteSocialLinks();

}