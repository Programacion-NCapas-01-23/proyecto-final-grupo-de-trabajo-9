package com.grupo9.blueTicket.models.entities;

import java.sql.Date;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "access")
public class Access {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID id;
	@Column(name = "email")
	private String email;
	@Column(name = "password")
	private String password;
	@Column(name = "session_start_date")
	private Date session_start_date;
	
	@Column(name = "content")
	private String content;
	
	@Column(name = "timestamp", insertable = false, updatable = false)
	private Date timestamp;
	
	@Column(name = "active", insertable = false)
	private Boolean active;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	@JsonIgnore
	private User user;

	public Access(String email, String password, Date session_start_date, String content, Date timestamp,
			Boolean active, User user) {
		super();
		this.email = email;
		this.password = password;
		this.session_start_date = session_start_date;
		this.content = content;
		this.timestamp = timestamp;
		this.active = active;
		this.user = user;
	}
	
	
	
	
}
