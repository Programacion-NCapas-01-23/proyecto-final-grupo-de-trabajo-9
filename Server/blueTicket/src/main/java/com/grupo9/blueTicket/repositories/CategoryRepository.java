package com.grupo9.blueTicket.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import com.grupo9.blueTicket.models.entities.Category;

@Repository
public interface CategoryRepository extends ListCrudRepository<Category, UUID> {

}
