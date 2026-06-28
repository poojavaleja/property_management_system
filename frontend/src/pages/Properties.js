/**
 * Author: Pooja Valeja
 * Properties Page Component
 */
import React, { useState, useEffect } from 'react';
import '../styles/pages.css';

function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      // TODO: Add API call to fetch properties
      setLoading(false);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>Properties</h1>
        <button className="btn-primary">Add Property</button>
      </div>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="properties-list">
          {properties.length === 0 ? (
            <p>No properties found</p>
          ) : (
            properties.map((property) => (
              <div key={property.id} className="property-card">
                <h3>{property.name}</h3>
                <p>{property.address}</p>
                <p>Rooms: {property.totalRooms}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Properties;
