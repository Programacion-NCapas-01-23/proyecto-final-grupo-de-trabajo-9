package com.grupo9.blueTicket.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupo9.blueTicket.models.entities.User;
import com.grupo9.blueTicket.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/all")
	public ResponseEntity<?> userAll(){
		List<User> user = userService.findAll();
		if(user != null) {
			return ResponseEntity.ok(user);	
		}else {
			return ResponseEntity.notFound().build();
		}
	}

}
