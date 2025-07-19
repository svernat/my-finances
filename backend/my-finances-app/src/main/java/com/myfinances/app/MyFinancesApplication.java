package com.myfinances.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main application class for MyFinances application.
 * This class serves as the entry point for the Spring Boot application.
 */
@SpringBootApplication
public class MyFinancesApplication {

    /**
     * Main method which serves as the entry point for the application.
     *
     * @param args command line arguments
     */
    public static void main(String[] args) {
        SpringApplication.run(MyFinancesApplication.class, args);
    }
}