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
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Event")
public class Event {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_category", nullable = true)
    private Category category;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_locality", nullable = true)
    private Locality locality;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_user", nullable = true)
    private User user;

    @Column(name = "title")
	private String title;

	@Column(name = "image1")
	private String image1;

    @Column(name = "image2")
    private String image2;

    @Column(name = "date")
    private String date;

    @Column(name = "hour")
    private String hour;

    @Column(name = "duration")
    private String duration;

    @Column(name = "sponsor")
    private String sponsor;

    @Column(name = "involved")
    private String involved;

    public Event(String title, String image1, String image2, String date, String hour, String duration, String sponsor, String involved) {
        super();
        //this.category = category;
        //this.locality = locality;
        //this.user = user;
        this.title = title;
        this.image1 = image1;
        this.image2 = image2;
        this.date = date;
        this.hour = hour;
        this.duration = duration;
        this.sponsor = sponsor;
        this.involved = involved;
    }
}
