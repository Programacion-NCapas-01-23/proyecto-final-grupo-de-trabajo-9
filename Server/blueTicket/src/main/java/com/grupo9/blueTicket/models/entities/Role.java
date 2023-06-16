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
@ToString(exclude = "rolePermissions")
@NoArgsConstructor
@Entity
@Table(name = "role")
public class Role {
    
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String role;
    
    @OneToMany(mappedBy = "id_role", fetch = FetchType.LAZY)
    private List<Role_permission> rolePermissions;
    
    public Role(String role) {
    	super();
    	
    	this.role = role;
    }
    
}
