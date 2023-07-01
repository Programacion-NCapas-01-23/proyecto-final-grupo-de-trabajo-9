package com.grupo9.blueTicket.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupo9.blueTicket.models.entities.Event;
import com.grupo9.blueTicket.services.EventService;
import com.grupo9.blueTicket.utils.RequestErrorHandler;

@RestController
@RequestMapping("/public")
@CrossOrigin("*")
public class PublicController {
	
	@Autowired
	private EventService eventService;
	
	private RequestErrorHandler errorHandler;
	
	@GetMapping("/home")
	public ResponseEntity<?> getAllEvents(){
		List<Event> allEvents = eventService.getAllEvents();
		return new ResponseEntity<>(allEvents, HttpStatus.OK);
	}
}
