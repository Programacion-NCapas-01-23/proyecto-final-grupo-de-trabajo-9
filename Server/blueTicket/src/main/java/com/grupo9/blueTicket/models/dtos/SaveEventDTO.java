package com.grupo9.blueTicket.models.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class SaveEventDTO {
	/*@NotEmpty(message = "Category is required")
	private Category category;*/
	
	@NotEmpty(message = "Title is required")
	private String title;
	
	@NotEmpty(message = "Image 1 is required")
	private String image1;
	
	@NotEmpty(message = "Image 2 is required")
	private String image2;
	
	@NotEmpty(message = "Date is required")
	private String date;
	
	@NotEmpty(message = "Hour is required")
	private String hour;
	
	@NotEmpty(message = "Duration is required")
	private String duration;
	
	@NotEmpty(message = "Involved is required")
	private String involved;
	
	@NotEmpty(message = "Sponsor is required")
	private String sponsor;
	
}
