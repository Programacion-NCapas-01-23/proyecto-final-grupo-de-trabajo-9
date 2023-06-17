package com.grupo9.blueTicket.services.implementations;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;

import com.grupo9.blueTicket.models.dtos.EventDTO;
import com.grupo9.blueTicket.models.dtos.SaveEventDTO;
import com.grupo9.blueTicket.models.entities.Event;
import com.grupo9.blueTicket.repositories.EventRepository;
import com.grupo9.blueTicket.services.EventService;


public class EventServiceImpl implements EventService  {
	
	@Autowired
	private EventRepository eventRepository;
	
	@Override
	public void createEvent(SaveEventDTO info) throws Exception {
		Event event = new Event(
			    info.getTitle(),
				info.getImage1(),
				info.getImage2(),
				info.getDate(),
				info.getHour(),
				info.getDuration(),
				info.getSponsor(),
				info.getInvolved()
				);	
		
		eventRepository.save(event);
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

	//Buscar Evento
	@Override
	public Event findOneById(UUID id) {
		try {
			return eventRepository.findById(id)
					.orElse(null);
		} catch (Exception e) {
			
			return null;
			
		}
		
	}

}
