package com.grupo9.blueTicket.services;

//import com.grupo9.blueTicket.models.dtos.CategoryDTO;

import java.util.List;

import com.grupo9.blueTicket.models.entities.Category;

public interface CategoryService {

	List<Category> findAll();
}
