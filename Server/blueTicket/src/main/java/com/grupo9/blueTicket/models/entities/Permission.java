package com.grupo9.blueTicket.models.entities;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
    private int id = 1;

    @Column(name = "permission")
    private String permission;
    
    @Column(name = "status")
    private Boolean status;
    
    //Creo que faltaba este
    @OneToMany(mappedBy = "id_permission", fetch = FetchType.LAZY)
    private List<Role_permission> rolePermission;
}