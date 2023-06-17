package com.grupo9.blueTicket.controllers;

import com.grupo9.blueTicket.models.dtos.EventDTO;
import com.grupo9.blueTicket.services.EventService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;
/*
@RestController
@RequestMapping("/events")
public class EventController {
    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/{eventId}")
    public ResponseEntity<EventDTO> getEventById(@PathVariable UUID eventId) {
        EventDTO eventDTO = eventService.getEventById(eventId);
        return ResponseEntity.status(HttpStatus.OK).body(eventDTO);
    }

    @GetMapping("/attended-events/{userId}")
public ResponseEntity<List<EventDTO>> getAttendedEventsByUserId(@PathVariable UUID userId) {
    List<EventDTO> attendedEvents = eventService.getAttendedEventsByUserId(userId);
    return ResponseEntity.ok(attendedEvents);
}

}*/