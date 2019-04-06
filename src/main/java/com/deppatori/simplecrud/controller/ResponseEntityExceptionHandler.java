package com.deppatori.simplecrud.controller;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import com.deppatori.simplecrud.exception.ErrorDetails;
import com.deppatori.simplecrud.exception.StudentNotFoundException;


public class ResponseEntityExceptionHandler{
	
	@ExceptionHandler(StudentNotFoundException.class)
	public final ResponseEntity<ErrorDetails> handleUSerNotFoundException(StudentNotFoundException ex,WebRequest request){
		ErrorDetails error = new ErrorDetails(new Date(),ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(error,HttpStatus.NOT_FOUND);
	}
}
