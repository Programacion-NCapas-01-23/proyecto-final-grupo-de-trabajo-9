package com.grupo9.blueTicket.models.entities;

import java.util.Date;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "sale")
public class Sale {
    
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_user", nullable = true)
    private User user;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_ticket", nullable = true)
    private Ticket ticket;
    
    @Column(name = "date_purchase")
    private Date date_purchase;
    
    @Column(name = "amount_ticket_purchase")
    private int amount_ticket;
    
    public Sale(User user, Ticket ticket, Date date_purchase, int amount_ticket) {
    	super();
    	this.user = user;
    	this.ticket = ticket;
    	this.date_purchase = date_purchase;
    	this.amount_ticket = amount_ticket;
    	
    }
    
}