package com.devportfolio.service.impl;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.devportfolio.service.EmailService;

@Service
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender mailSender;

    public EmailServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public void sendOtpEmail(String email, String otp) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(email);
        message.setSubject("DevPortfolio - Password Reset OTP");

        message.setText(
                "Your password reset OTP is: " + otp
                + "\n\nThis OTP will expire in 5 minutes."
                + "\n\nIf you did not request a password reset, ignore this email."
        );

        mailSender.send(message);
        System.out.println("=================================");
        System.out.println("PASSWORD RESET OTP: " + otp);
        System.out.println("=================================");
    }
}