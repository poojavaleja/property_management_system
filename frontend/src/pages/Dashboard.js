/**
 * Author: Pooja Valeja
 * Dashboard Page Component
 */
import React, { useState, useEffect } from 'react';
import '../styles/pages.css';

function Dashboard() {
  const [stats, setStats] = useState({
    totalProperties: 0,
    activeTenants: 0,
    totalBookings: 0,
    totalRevenue: 0
  });

  useEffect(() => {
    // Fetch dashboard statistics
    // TODO: Add API call
  }, []);

  return (
    <div className="container">
      <div className="page-header">
        <h1>Dashboard</h1>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Properties</h3>
          <p className="stat-value">{stats.totalProperties}</p>
        </div>
        <div className="stat-card">
          <h3>Active Tenants</h3>
          <p className="stat-value">{stats.activeTenants}</p>
        </div>
        <div className="stat-card">
          <h3>Total Bookings</h3>
          <p className="stat-value">{stats.totalBookings}</p>
        </div>
        <div className="stat-card">
          <h3>Total Revenue</h3>
          <p className="stat-value">${stats.totalRevenue}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
