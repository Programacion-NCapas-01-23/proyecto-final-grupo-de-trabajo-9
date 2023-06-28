package com.grupo9.blueTicket.repositories;

import java.util.UUID;

import org.springframework.data.repository.ListCrudRepository;

import com.grupo9.blueTicket.models.entities.Sale;

public interface SaleRepository extends ListCrudRepository<Sale, UUID> {

}
