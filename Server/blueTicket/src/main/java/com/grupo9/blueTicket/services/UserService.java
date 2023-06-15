package com.grupo9.blueTicket.services;

import java.util.UUID;

import com.grupo9.blueTicket.models.entities.User;
import com.grupo9.blueTicket.models.entities.Token;
import com.grupo9.blueTicket.models.dtos.LoginDTO;
import com.grupo9.blueTicket.models.dtos.PasswordDTO;

public interface UserService {

	void login(LoginDTO info) throws Exception;
	void changePassword(UUID id, PasswordDTO info) throws Exception;
	void isActive(Boolean isActive);
	User findOneByIdentifier(String identifier);
	
	//Token management
    Token registerToken(User user) throws Exception;
    Boolean isTokenValid(User user, String token);
    void cleanTokens(User user) throws Exception;
    
  //Find User authenticated
    User findUserAuthenticated();
	Boolean comparePassword(String toCompare, String current);
}
