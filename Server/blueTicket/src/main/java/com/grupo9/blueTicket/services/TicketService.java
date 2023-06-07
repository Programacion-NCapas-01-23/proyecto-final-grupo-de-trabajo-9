package com.grupo9.blueTicket.services;

import java.util.List;
import java.util.UUID;

import com.grupo9.blueTicket.models.dtos.TransferDTO;
import com.grupo9.blueTicket.models.entities.Ticket;

public interface TicketService {

	Ticket findOneById(UUID id);
	List<Ticket> findAll();
	
	void generateQR(String hash);
	
	void transferTicket(TransferDTO info) throws Exception;
}
