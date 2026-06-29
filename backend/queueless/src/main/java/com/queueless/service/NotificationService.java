package com.queueless.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    private final List<String> notifications =
            new ArrayList<>();

    @Autowired
    private JavaMailSender mailSender;

    public String createNotification(
            String message) {

        notifications.add(message);

        return message;
    }

    public List<String> getNotifications() {
        return notifications;
    }

    public String sendQueueAlert(
            String email,
            String token) {

        String message =
                "Your token " + token +
                " is now being served.";

        notifications.add(message);

        SimpleMailMessage mail =
                new SimpleMailMessage();

        mail.setTo(email);

        mail.setSubject(
                "Queue Alert"
        );

        mail.setText(
                message
        );

        mailSender.send(mail);

        return "Email sent successfully";
    }
}