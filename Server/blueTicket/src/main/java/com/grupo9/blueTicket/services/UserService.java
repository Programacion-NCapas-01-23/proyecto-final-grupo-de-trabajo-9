package com.grupo9.blueTicket.services;

import java.util.UUID;

import com.grupo9.blueTicket.models.dtos.LoginDTO;
import com.grupo9.blueTicket.models.dtos.PasswordDTO;

public interface UserService {

	void login(LoginDTO info) throws Exception;
	void changePassword(UUID id, PasswordDTO info) throws Exception;
	void isActive(Boolean isActive);
}
