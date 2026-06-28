/**
 * Author: Pooja Valeja
 * Tenants Page Component
 */
import React, { useState, useEffect } from 'react';
import '../styles/pages.css';

function Tenants() {
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTenants();
  }, []);

  const fetchTenants = async () => {
    try {
      // TODO: Add API call to fetch tenants
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tenants:', error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>Tenants</h1>
        <button className="btn-primary">Add Tenant</button>
      </div>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="tenants-list">
          {tenants.length === 0 ? (
            <p>No tenants found</p>
          ) : (
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tenants.map((tenant) => (
                  <tr key={tenant.id}>
                    <td>{tenant.firstName} {tenant.lastName}</td>
                    <td>{tenant.email}</td>
                    <td>{tenant.phone}</td>
                    <td>{tenant.status}</td>
                    <td>
                      <button>Edit</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default Tenants;
