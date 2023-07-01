package com.grupo9.blueTicket.repositories;

import java.util.UUID;

import org.springframework.data.repository.ListCrudRepository;

import com.grupo9.blueTicket.models.entities.UserXRole;

public interface UserXRoleRepository extends ListCrudRepository<UserXRole, UUID> {

}
