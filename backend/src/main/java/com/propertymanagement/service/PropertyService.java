/**
 * Author: Pooja Valeja
 * Property Service
 */
package com.propertymanagement.service;

import com.propertymanagement.model.Property;
import com.propertymanagement.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    public Property createProperty(Property property) {
        return propertyRepository.save(property);
    }

    public Optional<Property> getPropertyById(String id) {
        return propertyRepository.findById(id);
    }

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    public List<Property> getPropertiesByOwnerId(String ownerId) {
        return propertyRepository.findByOwnerId(ownerId);
    }

    public List<Property> getPropertiesByCity(String city) {
        return propertyRepository.findByCity(city);
    }

    public Property updateProperty(String id, Property property) {
        property.setId(id);
        return propertyRepository.save(property);
    }

    public void deleteProperty(String id) {
        propertyRepository.deleteById(id);
    }
}
