package com.grupo9.blueTicket.services.implementations;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;

import com.grupo9.blueTicket.models.dtos.EventDTO;
import com.grupo9.blueTicket.models.dtos.SaveEventDTO;
import com.grupo9.blueTicket.models.entities.Event;
import com.grupo9.blueTicket.repositories.EventRepository;
import com.grupo9.blueTicket.services.EventService;

public class EventServiceImpl1 implements EventService {
	
	@Autowired
	private EventRepository eventRepository;
	
	//Crear un evento
	@Override
	public void createEvent(SaveEventDTO info) throws Exception {
		
	}
	
	//Buscar un evento 
	@Override
	public Event findOneById(UUID id) {
		try {
			return eventRepository.findById(id)
					.orElse(null);
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public List<EventDTO> getAllEvents() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public EventDTO updateEvent(UUID eventId, EventDTO eventDTO) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteEvent(UUID eventId) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<EventDTO> getAttendedEventsByUserId(UUID userId) {
		// TODO Auto-generated method stub
		return null;
	}

}
