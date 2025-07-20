package com.myfinances.app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Security configuration for the MyFinances application.
 * This class configures Spring Security with OIDC authentication.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    /**
     * Configures the security filter chain.
     *
     * @param http the HttpSecurity to configure
     * @return the configured SecurityFilterChain
     * @throws Exception if an error occurs during configuration
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // Disable CSRF as we're using stateless session management
            .csrf(AbstractHttpConfigurer::disable)
            
            // Configure session management to be stateless
            .sessionManagement(session -> 
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            
            // Configure authorization rules
            .authorizeHttpRequests(authorize -> authorize
                // Allow access to actuator endpoints without authentication
                .requestMatchers("/actuator/**").permitAll()
                // Require authentication for all other requests
                .anyRequest().authenticated())
            
            // Configure OAuth2 login
            .oauth2Login(oauth2 -> oauth2
                .loginPage("/oauth2/authorization/myfinances-oidc"))
            
            // Configure OAuth2 resource server with JWT
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> {}));
        
        return http.build();
    }
}