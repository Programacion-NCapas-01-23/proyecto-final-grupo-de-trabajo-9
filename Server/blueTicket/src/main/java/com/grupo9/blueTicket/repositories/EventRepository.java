package com.grupo9.blueTicket.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.grupo9.blueTicket.models.entities.Event;

public interface EventRepository extends JpaRepository<Event, UUID> {

}
