/**
 * Author: Pooja Valeja
 * Property Model
 */
package com.propertymanagement.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "properties")
public class Property {

    @Id
    private String id;

    private String name;
    private String address;
    private String city;
    private String state;
    private String zipCode;
    private String propertyType;
    private int totalRooms;
    private String ownerId;
    private double totalValue;
    private String description;
    private List<String> amenities;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
