/**
 * Author: Pooja Valeja
 * Booking Model
 */
package com.propertymanagement.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "bookings")
public class Booking {

    @Id
    private String id;

    private String propertyId;
    private String roomNumber;
    private String guestName;
    private String guestEmail;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private double totalPrice;
    private double paidAmount;
    private String status;
    private String bookingReference;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
