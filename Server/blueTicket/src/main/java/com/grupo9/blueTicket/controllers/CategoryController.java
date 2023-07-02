package com.grupo9.blueTicket.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupo9.blueTicket.models.entities.Category;
import com.grupo9.blueTicket.services.CategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {
	@Autowired
	private CategoryService categoryService;
	
	@GetMapping("/allCategory")
	public ResponseEntity<?> allCategories(){
		List<Category> category = categoryService.findAll();
		return new ResponseEntity<>(category, HttpStatus.OK);
		
	}

}
