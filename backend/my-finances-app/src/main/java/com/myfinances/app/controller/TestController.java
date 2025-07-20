package com.myfinances.app.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

/**
 * Test controller to demonstrate OIDC authentication.
 * This controller provides endpoints to test the security configuration.
 */
@RestController
public class TestController {

    /**
     * Public endpoint that returns a simple message.
     * This endpoint is protected by OIDC authentication.
     *
     * @return a simple message
     */
    @GetMapping("/")
    public Map<String, String> home() {
        return Collections.singletonMap("message", "Hello, MyFinances!");
    }

    /**
     * Endpoint that returns information about the authenticated user.
     * This endpoint is protected by OIDC authentication.
     *
     * @param user the authenticated user
     * @return information about the authenticated user
     */
    @GetMapping("/user")
    public Map<String, Object> user(@AuthenticationPrincipal OAuth2User user) {
        return Collections.singletonMap("user", user.getAttributes());
    }
}