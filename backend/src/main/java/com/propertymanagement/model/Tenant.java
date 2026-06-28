/**
 * Author: Pooja Valeja
 * Tenant Model
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
@Document(collection = "tenants")
public class Tenant {

    @Id
    private String id;

    private String propertyId;
    private String roomNumber;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private double rentAmount;
    private String status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
