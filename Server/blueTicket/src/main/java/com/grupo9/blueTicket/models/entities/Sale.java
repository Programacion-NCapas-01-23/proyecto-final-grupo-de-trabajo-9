package com.grupo9.blueTicket.models.entities;

import java.util.Date;
import java.util.List;
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
import lombok.ToString;

@Data
@NoArgsConstructor
@ToString(exclude = "ticket")
@Entity
@Table(name = "sale")
public class Sale {
    
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    
    //FK de user
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_user", nullable = true)
    private User user;
    
    @OneToMany(mappedBy = "sale", fetch = FetchType.LAZY)
    private List<Ticket> ticket; //La conexión con ticket
    
    @Column(name = "date_purchase")
    private Date date_purchase;
    
    @Column(name = "amount_ticket_purchase")
    private int amount_ticket;
    
    
    
}