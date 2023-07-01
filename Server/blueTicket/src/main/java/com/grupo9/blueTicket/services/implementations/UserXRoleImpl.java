package com.grupo9.blueTicket.services.implementations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo9.blueTicket.models.dtos.AssingRoleDTO;
import com.grupo9.blueTicket.models.entities.Role;
import com.grupo9.blueTicket.models.entities.User;
import com.grupo9.blueTicket.models.entities.UserXRole;
import com.grupo9.blueTicket.repositories.UserXRoleRepository;
import com.grupo9.blueTicket.services.RoleService;
import com.grupo9.blueTicket.services.UserService;
import com.grupo9.blueTicket.services.UserXRoleService;

import jakarta.transaction.Transactional;

@Service
public class UserXRoleImpl implements UserXRoleService {

	@Autowired
	private UserXRoleRepository userXRoleRepository;
	@Autowired
	private UserService userService;
	@Autowired
	private RoleService roleService;
	
	@Override
	@Transactional(rollbackOn = Exception.class)
	public void assignRole(AssingRoleDTO info) throws Exception {
		UserXRole newUserXRole = new UserXRole();
		Role role = roleService.findOneById(info.getId_role());
		User user = userService.findOneById(info.getId_user());
		
		newUserXRole.setRole(role);
		newUserXRole.setUser(user);
		newUserXRole.setStatus(info.getStatus());
		
		userXRoleRepository.save(newUserXRole);
	}

}
