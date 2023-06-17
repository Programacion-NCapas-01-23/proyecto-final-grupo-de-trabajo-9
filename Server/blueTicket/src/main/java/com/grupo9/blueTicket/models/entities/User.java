package com.grupo9.blueTicket.models.entities;

import java.util.Collection;
import java.util.List;
import java.util.UUID;
import jakarta.persistence.CascadeType;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.grupo9.blueTicket.models.entities.Token;
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

public class User implements UserDetails {
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
	 @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
		@JsonIgnore
		private List<Token> tokens;
		
		private static final long serialVersionUID = 1460435087476558985L;


		public User(String name, String email, String password, Boolean active) {
			super();
			this.name = name;
			this.email = email;
			this.password = password;
			this.active = active;
			
		}

		@Override
		public Collection<? extends GrantedAuthority> getAuthorities() {
		return null;
		}
		//getUsername is already overridden
		@Override
		public boolean isAccountNonExpired() {
		return false;
		}
		@Override
		public boolean isAccountNonLocked() {
		return false;
		}
		@Override
		public boolean isCredentialsNonExpired() {
		return false;
		}
		@Override
		public boolean isEnabled() {
		return this.active;
		}

		@Override
		public String getUsername() {
			// TODO Auto-generated method stub
			return null;
		}

        public Event getEvent() {
            return null;
        }

}
