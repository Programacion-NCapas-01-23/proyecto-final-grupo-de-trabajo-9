package com.grupo9.blueTicket.models.entities;

import java.util.List;
import java.util.UUID;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@ToString(exclude = {"userRole", "event", "access"})
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
	 
	 @OneToMany(mappedBy = "id_user", fetch = FetchType.LAZY)
	 private List<User_role> userRole;
	 
	 //Creando la conexión con el event
	 @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	 private List<Event> event;
	 
	 @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	 private List<Access> access;

	public User(String name, String email, String password, Boolean active) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.active = active;
	}

	 //Creo que falta establecer la conexión con la tabla transfer

	
}
