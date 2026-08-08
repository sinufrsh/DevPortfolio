package com.devportfolio.service.impl;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.devportfolio.dto.ApiResponse;
import com.devportfolio.dto.ForgotPasswordRequest;
import com.devportfolio.dto.ResetPasswordRequest;
import com.devportfolio.dto.VerifyOtpRequest;
import com.devportfolio.entity.PasswordResetOtp;
import com.devportfolio.entity.User;
import com.devportfolio.repository.PasswordResetOtpRepository;
import com.devportfolio.repository.UserRepository;
import com.devportfolio.service.EmailService;
import com.devportfolio.service.PasswordResetService;

@Service
public class PasswordResetServiceImpl implements PasswordResetService {

    private final UserRepository userRepository;
    private final PasswordResetOtpRepository otpRepository;
    private final EmailService emailService;
    private final PasswordEncoder passwordEncoder;

    public PasswordResetServiceImpl(
            UserRepository userRepository,
            PasswordResetOtpRepository otpRepository,
            EmailService emailService,
            PasswordEncoder passwordEncoder) {

        this.userRepository = userRepository;
        this.otpRepository = otpRepository;
        this.emailService = emailService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public ApiResponse<Void> sendOtp(ForgotPasswordRequest request) {

        String email = request.getEmail();

        Optional<User> optionalUser =
                userRepository.findByEmail(email);

        if (optionalUser.isEmpty()) {
            return new ApiResponse<>(
                    false,
                    "No account found with this email",
                    null
            );
        }

        String otp = String.format(
                "%06d",
                new Random().nextInt(1000000)
        );

        PasswordResetOtp passwordResetOtp =
                new PasswordResetOtp(
                        email,
                        otp,
                        LocalDateTime.now().plusMinutes(5)
                );

        otpRepository.save(passwordResetOtp);

        emailService.sendOtpEmail(email, otp);

        return new ApiResponse<>(
                true,
                "OTP sent successfully",
                null
        );
    }

    @Override
    public ApiResponse<Void> verifyOtp(VerifyOtpRequest request) {

        PasswordResetOtp otp =
                otpRepository
                        .findTopByEmailAndUsedFalseOrderByIdDesc(
                                request.getEmail()
                        )
                        .orElse(null);

        if (otp == null) {
            return new ApiResponse<>(
                    false,
                    "OTP not found",
                    null
            );
        }

        if (otp.getExpiresAt().isBefore(LocalDateTime.now())) {

            return new ApiResponse<>(
                    false,
                    "OTP has expired",
                    null
            );
        }

        if (!otp.getOtp().equals(request.getOtp())) {

            return new ApiResponse<>(
                    false,
                    "Invalid OTP",
                    null
            );
        }

        return new ApiResponse<>(
                true,
                "OTP verified successfully",
                null
        );
    }

    @Override
    public ApiResponse<Void> resetPassword(
            ResetPasswordRequest request) {

        PasswordResetOtp otp =
                otpRepository
                        .findTopByEmailAndUsedFalseOrderByIdDesc(
                                request.getEmail()
                        )
                        .orElse(null);

        if (otp == null) {
            return new ApiResponse<>(
                    false,
                    "OTP not found",
                    null
            );
        }

        if (otp.getExpiresAt().isBefore(LocalDateTime.now())) {

            return new ApiResponse<>(
                    false,
                    "OTP has expired",
                    null
            );
        }

        if (!otp.getOtp().equals(request.getOtp())) {

            return new ApiResponse<>(
                    false,
                    "Invalid OTP",
                    null
            );
        }

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        user.setPassword(
                passwordEncoder.encode(request.getNewPassword())
        );

        userRepository.save(user);

        otp.setUsed(true);
        otpRepository.save(otp);

        return new ApiResponse<>(
                true,
                "Password reset successfully",
                null
        );
    }
}