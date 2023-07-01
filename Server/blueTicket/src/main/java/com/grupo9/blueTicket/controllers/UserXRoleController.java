package com.grupo9.blueTicket.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupo9.blueTicket.models.dtos.AssingRoleDTO;
import com.grupo9.blueTicket.models.dtos.MessageDTO;
import com.grupo9.blueTicket.services.UserXRoleService;
import com.grupo9.blueTicket.utils.RequestErrorHandler;

@RestController
@RequestMapping("/assing-role")
@CrossOrigin("*")
public class UserXRoleController {
	
	@Autowired
	private UserXRoleService userXRoleService;
	
	private RequestErrorHandler errorHandler;
	
	@PostMapping("/user")
	public ResponseEntity<?> assignRole(@RequestBody AssingRoleDTO info, BindingResult validations){
		if(validations.hasErrors()) {
			return new ResponseEntity<>(
					errorHandler.mapErrors(validations.getFieldErrors()), 
					HttpStatus.BAD_REQUEST);
		}
		
		try {
			userXRoleService.assignRole(info);
			return new ResponseEntity<>(
					new MessageDTO("Role assigned " + info), HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(
					new MessageDTO("Internal Server Error"), HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

}

