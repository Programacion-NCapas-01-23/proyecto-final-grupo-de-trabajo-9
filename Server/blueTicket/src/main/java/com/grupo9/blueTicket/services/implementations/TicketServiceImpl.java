package com.grupo9.blueTicket.services.implementations;

import com.grupo9.blueTicket.models.dtos.TransferDTO;
import com.grupo9.blueTicket.models.entities.Ticket;
import com.grupo9.blueTicket.models.entities.Token;
import com.grupo9.blueTicket.models.entities.User;
import com.grupo9.blueTicket.repositories.TicketRepository;
import com.grupo9.blueTicket.repositories.TokenRepository;
import com.grupo9.blueTicket.services.TicketService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.UUID;

@Service
public class TicketServiceImpl implements TicketService {
    private final TicketRepository ticketRepository;
    private final TokenRepository tokenRepository;

    public TicketServiceImpl(TicketRepository ticketRepository, TokenRepository tokenRepository) {
        this.ticketRepository = ticketRepository;
        this.tokenRepository = tokenRepository;
    }

    @Override
    public Ticket findOneById(UUID id) {
        return ticketRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Ticket not found with id: " + id));
    }

    @Override
    public List<Ticket> findAll() {
        return ticketRepository.findAll();
    }

    @Override
    public void generateQR(String hash) {
        // Lógica para generar el QR (no implementada aquí)
    }

    @Override
    public void transferTicket(TransferDTO info) throws Exception {
        // Lógica para transferir el ticket (no implementada aquí)
    }

    @Override
    public void generateToken(UUID ticketId) {
        Ticket ticket = ticketRepository.findById(ticketId)
                .orElseThrow(() -> new IllegalArgumentException("Ticket not found with id: " + ticketId));

        // Generar el token aquí (código personalizado según tus requerimientos)
        String tokenContent = generateTokenContent();

        // Crear un nuevo token asociado al ticket
        Token token = new Token(tokenContent, ticket.getUser());
        tokenRepository.save(token);
    }

    private String generateTokenContent() {
        // Lógica para generar el contenido del token
        // Ejemplo básico: generar un token aleatorio de 10 caracteres
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder token = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < 10; i++) {
            int index = random.nextInt(characters.length());
            token.append(characters.charAt(index));
        }
        return token.toString();
    }

    @Override
    public String generateTokenContent(Ticket ticket) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'generateTokenContent'");
    }
}
