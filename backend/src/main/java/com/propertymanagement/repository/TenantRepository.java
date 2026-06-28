/**
 * Author: Pooja Valeja
 * Tenant Repository
 */
package com.propertymanagement.repository;

import com.propertymanagement.model.Tenant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TenantRepository extends MongoRepository<Tenant, String> {
    List<Tenant> findByPropertyId(String propertyId);
    List<Tenant> findByStatus(String status);
}
