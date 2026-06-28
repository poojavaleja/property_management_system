/**
 * Author: Pooja Valeja
 * Bookings Page Component
 */
import React, { useState, useEffect } from 'react';
import '../styles/pages.css';

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      // TODO: Add API call to fetch bookings
      setLoading(false);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>Bookings</h1>
        <button className="btn-primary">New Booking</button>
      </div>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="bookings-list">
          {bookings.length === 0 ? (
            <p>No bookings found</p>
          ) : (
            <table className="data-table">
              <thead>
                <tr>
                  <th>Booking Ref</th>
                  <th>Guest Name</th>
                  <th>Check-in</th>
                  <th>Check-out</th>
                  <th>Total Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.bookingReference}</td>
                    <td>{booking.guestName}</td>
                    <td>{booking.checkInDate}</td>
                    <td>{booking.checkOutDate}</td>
                    <td>${booking.totalPrice}</td>
                    <td>{booking.status}</td>
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

export default Bookings;
