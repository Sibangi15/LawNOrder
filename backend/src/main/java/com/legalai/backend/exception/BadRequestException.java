package com.legalai.backend.exception;

public class BadRequestException
        extends RuntimeException {

    public BadRequestException(String message) {

        super(message);
    }
}
