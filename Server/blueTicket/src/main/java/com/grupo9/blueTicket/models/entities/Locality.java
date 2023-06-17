package com.grupo9.blueTicket.models.entities;

import java.util.List;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@ToString(exclude = "eventLocality")
@Entity
@Table(name = "locality")
public class Locality {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID id;
	@Column(name = "name")
	private String name;
	@Column(name = "price")
	private Float price;
	@Column(name = "capacity")
	private int capacity;
	
	@OneToMany(mappedBy = "locality", fetch = FetchType.LAZY)
	private List<Event> eventLocality;

	public Locality(String name, Float price, int capacity, List<Event> eventLocality) {
		super();
		this.name = name;
		this.price = price;
		this.capacity = capacity;
		this.eventLocality = eventLocality;
	}

	
	
	
	
}
