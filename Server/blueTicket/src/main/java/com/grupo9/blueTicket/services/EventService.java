package com.grupo9.blueTicket.services;

import java.util.List;
import java.util.UUID;

import com.grupo9.blueTicket.models.dtos.ActiveEventDTO;
import com.grupo9.blueTicket.models.dtos.EventDTO;
import com.grupo9.blueTicket.models.dtos.SaveEventDTO;
import com.grupo9.blueTicket.models.entities.Event;

public interface EventService {
	
	void createEvent(SaveEventDTO event) throws Exception;
	
	Event findOneById(UUID id);
	Event findOneByTitle(String title);
	
	void updateActiveEvent(UUID id, ActiveEventDTO active) throws Exception;
	
	List<Event> getAllEvents();

    void deleteEvent(UUID eventId);

    List<Event> getAttendedEventsByUserId(UUID userId);

}