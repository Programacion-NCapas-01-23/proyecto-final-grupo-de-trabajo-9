package com.grupo9.blueTicket.controllers;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupo9.blueTicket.models.dtos.MessageDTO;
import com.grupo9.blueTicket.models.dtos.SaveEventDTO;
import com.grupo9.blueTicket.models.entities.Category;
import com.grupo9.blueTicket.models.entities.Event;
import com.grupo9.blueTicket.services.CategoryService;
import com.grupo9.blueTicket.services.EventService;
import com.grupo9.blueTicket.utils.RequestErrorHandler;

import jakarta.validation.Valid;
import net.bytebuddy.build.Plugin.Engine.ErrorHandler;

@RestController
@RequestMapping("/events")
public class EventController1 {
	
	private EventService eventService;
	private CategoryService categoryService;
	
	private RequestErrorHandler errorHandler;
	
	@PostMapping("/save")
	public ResponseEntity<?> saveEvent(@RequestBody @Valid SaveEventDTO info, BindingResult validations){
		if(validations.hasErrors()) {
			return new ResponseEntity<>(
					errorHandler.mapErrors(validations.getFieldErrors()), 
					HttpStatus.BAD_REQUEST);
		}
		
		try {
			
			/*
			List<Category> allCategory = categoryService.findAll();
			for(Category category : allCategory) {
				System.out.println(category.getDescription());
			}
			*/
			System.out.println(info);
			//TODO: Convertir string a time, date e integer
			//Category category = categoryService.findOneById(info.getCategory());
			//System.out.println(category);
			//eventService.createEvent(info);
			//Date date = Date.valueOf(info.getDate());
			//System.out.println(date);
			System.out.println(info.getDate());
			System.out.println(info.getHour());
			//System.out.println(info.getCategory());
			//Category category = categoryService.findOneById(info.getCategory());
			//System.out.println(category);
			/*
			int id = Integer.parseInt(info.getCategory());
			
			Category category = categoryService.findOneById(id);
			System.out.println(category); */
			eventService.createEvent(info);
			
			return new ResponseEntity<>(
					new MessageDTO("Event create" + info), HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(
					new MessageDTO("Internal Server Error"), HttpStatus.INTERNAL_SERVER_ERROR);
			}
	}
	
	@GetMapping("/events/{id}")
	public ResponseEntity<?> getEventById(@PathVariable UUID id){
		Event event = eventService.findOneById(id);
		if(event != null) {
			return ResponseEntity.ok(event);
		}else {
			return ResponseEntity.notFound().build();
		}
	}
	@PostMapping("/update")
	public ResponseEntity<?> updateEvent(@RequestBody @Valid SaveEventDTO info, BindingResult validations){
		if(validations.hasErrors()) {
			return new ResponseEntity<>(
					errorHandler.mapErrors(validations.getFieldErrors()), 
					HttpStatus.BAD_REQUEST);
		}
		
		try {
			eventService.createEvent(info);
			return new ResponseEntity<>(
					new MessageDTO("Event create" + info), HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(
					new MessageDTO("Internal Server Error"), HttpStatus.INTERNAL_SERVER_ERROR);
			}
	}
	

}
