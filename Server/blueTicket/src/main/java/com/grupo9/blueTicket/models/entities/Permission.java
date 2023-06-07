package com.grupo9.blueTicket.models.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "permission")
public class Permission {
    
    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "permission")
    private String permission;
    
    public Permission(String id, String permission) {
    	super();
    	this.id = id;
    	this.permission = permission;	
    }
    
}