/**
 * Author: Pooja Valeja
 * Payment Repository
 */
package com.propertymanagement.repository;

import com.propertymanagement.model.Payment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PaymentRepository extends MongoRepository<Payment, String> {
    List<Payment> findByBookingId(String bookingId);
    List<Payment> findByTenantId(String tenantId);
    List<Payment> findByStatus(String status);
}
