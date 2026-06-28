/**
 * Author: Pooja Valeja
 * Booking Repository
 */
package com.propertymanagement.repository;

import com.propertymanagement.model.Booking;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BookingRepository extends MongoRepository<Booking, String> {
    List<Booking> findByPropertyId(String propertyId);
    List<Booking> findByStatus(String status);
}
