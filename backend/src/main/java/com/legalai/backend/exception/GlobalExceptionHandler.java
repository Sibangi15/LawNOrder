package com.legalai.backend.exception;

import com.legalai.backend.dto.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse>
    handleNotFound(ResourceNotFoundException ex) {

        ErrorResponse response = ErrorResponse.builder()

                .status(HttpStatus.NOT_FOUND.value())

                .error(ex.getMessage())

                .timestamp(LocalDateTime.now())

                .build();

        return new ResponseEntity<>(
                response,
                HttpStatus.NOT_FOUND
        );
    }

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ErrorResponse>
    handleBadRequest(BadRequestException ex) {

        ErrorResponse response = ErrorResponse.builder()

                .status(HttpStatus.BAD_REQUEST.value())

                .error(ex.getMessage())

                .timestamp(LocalDateTime.now())

                .build();

        return new ResponseEntity<>(
                response,
                HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse>
    handleValidation(
            MethodArgumentNotValidException ex
    ) {

        String message = ex.getBindingResult()
                .getFieldError()
                .getDefaultMessage();

        ErrorResponse response = ErrorResponse.builder()

                .status(HttpStatus.BAD_REQUEST.value())

                .error(message)

                .timestamp(LocalDateTime.now())

                .build();

        return new ResponseEntity<>(
                response,
                HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse>
    handleGeneral(Exception ex) {

        ErrorResponse response = ErrorResponse.builder()

                .status(HttpStatus.INTERNAL_SERVER_ERROR.value())

                .error(ex.getMessage())

                .timestamp(LocalDateTime.now())

                .build();

        return new ResponseEntity<>(
                response,
                HttpStatus.INTERNAL_SERVER_ERROR
        );
    }
}