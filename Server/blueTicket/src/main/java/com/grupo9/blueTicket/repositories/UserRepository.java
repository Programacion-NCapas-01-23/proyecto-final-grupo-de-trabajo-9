package com.grupo9.blueTicket.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.ListCrudRepository;

import com.grupo9.blueTicket.models.entities.User;

public interface UserRepository extends ListCrudRepository<User, UUID>{
	public User findOneByUsernameOrEmail(String username, String email);
	//Optional<User>findOneByCode(UUID id);
	//Optional<User> findBycode(UUID code);
}
