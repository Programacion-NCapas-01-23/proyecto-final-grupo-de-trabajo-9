package com.grupo9.blueTicket.services;

import java.util.List;
import java.util.UUID;

import com.grupo9.blueTicket.models.dtos.EventDTO;
import com.grupo9.blueTicket.models.dtos.SaveEventDTO;
import com.grupo9.blueTicket.models.entities.Event;

public interface EventService {
    //EventDTO createEvent(EventDTO eventDTO);
	
	void createEvent(SaveEventDTO info) throws Exception;

    //EventDTO getEventById(UUID eventId);
	
	Event findOneById(UUID id);

    List<EventDTO> getAllEvents();

    EventDTO updateEvent(UUID eventId, EventDTO eventDTO);

    void deleteEvent(UUID eventId);
}