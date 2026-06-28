/**
 * Author: Pooja Valeja
 * Property Repository
 */
package com.propertymanagement.repository;

import com.propertymanagement.model.Property;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PropertyRepository extends MongoRepository<Property, String> {
    List<Property> findByOwnerId(String ownerId);
    List<Property> findByCity(String city);
}
