package com.grupo9.blueTicket.controllers;

import com.grupo9.blueTicket.models.dtos.TokenDTO;
import com.grupo9.blueTicket.models.entities.Ticket;
import com.grupo9.blueTicket.services.TicketService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;
/*
@RestController
@RequestMapping("/tickets")
public class TicketController {
    private final TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @GetMapping("/{ticketId}")
    public ResponseEntity<TokenDTO> generateTokenForTicket(@PathVariable("ticketId") String ticketIdString) {
        UUID ticketId;
        try {
            ticketId = UUID.fromString(ticketIdString);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }

        Ticket ticket = ticketService.findOneById(ticketId);
        if (ticket == null) {
            return ResponseEntity.notFound().build();
        }

        String tokenContent = ticketService.generateTokenContent(ticket);
        TokenDTO tokenDTO = new TokenDTO();
        tokenDTO.setToken(tokenContent);
        return ResponseEntity.ok(tokenDTO);
    }

}*/
