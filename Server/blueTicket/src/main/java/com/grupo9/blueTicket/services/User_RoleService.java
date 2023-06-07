package com.grupo9.blueTicket.services;

import java.util.List;
import java.util.UUID;

import com.grupo9.blueTicket.models.dtos.SaveUserRoleDTO;
import com.grupo9.blueTicket.models.entities.User_role;

public interface User_RoleService {
    void save (SaveUserRoleDTO info) throws Exception;
	void delete(UUID id) throws Exception;
	List<User_role>findAll();
    
}
