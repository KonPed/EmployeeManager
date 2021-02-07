package com.example.testProject.Exceptions;

public class UserNotFoundException extends Exception {
    public UserNotFoundException(String exceptionMessage) {
        super(exceptionMessage);
    }
}
