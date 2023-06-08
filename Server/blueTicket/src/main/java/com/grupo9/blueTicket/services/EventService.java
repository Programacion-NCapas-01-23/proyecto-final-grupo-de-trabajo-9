package com.grupo9.blueTicket.services;

import java.util.List;
import java.util.UUID;

import com.grupo9.blueTicket.models.dtos.EventDTO;
import com.grupo9.blueTicket.models.entities.Event;

public interface EventService {
    EventDTO createEvent(EventDTO eventDTO);

    EventDTO getEventById(UUID eventId);

    List<EventDTO> getAllEvents();

    EventDTO updateEvent(UUID eventId, EventDTO eventDTO);

    void deleteEvent(UUID eventId);
}