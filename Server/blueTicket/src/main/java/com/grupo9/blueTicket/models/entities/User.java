package com.grupo9.blueTicket.models.entities;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "user")

public class User {
	 @Id
	 @Column(name = "id")
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 private UUID id;
	 
	 @Column(name = "name")
	 private String name;

	 @Column(name = "email")
	 private String email;

	 @Column(name = "password")
	 private String password;
	 
	 @Column(name = "active")
	 private Boolean active;
	 
	 /* @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	 @JoinColumn(name = "id_user_role")
	 private UserRole userRole;
	    
	 @ManyToOne(fetch = FetchType.LAZY)
	 @JoinColumn(name = "id_access")
	 private Access access;*/


	public User(String name, String email, String password) {
		super();
		
		this.name = name;
		this.email = email;
		this.password = password;
	}
}
