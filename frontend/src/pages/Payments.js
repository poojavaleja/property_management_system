/**
 * Author: Pooja Valeja
 * Payments Page Component
 */
import React, { useState, useEffect } from 'react';
import '../styles/pages.css';

function Payments() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      // TODO: Add API call to fetch payments
      setLoading(false);
    } catch (error) {
      console.error('Error fetching payments:', error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>Payments</h1>
        <button className="btn-primary">Record Payment</button>
      </div>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="payments-list">
          {payments.length === 0 ? (
            <p>No payments found</p>
          ) : (
            <table className="data-table">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id}>
                    <td>{payment.transactionId}</td>
                    <td>${payment.amount}</td>
                    <td>{payment.paymentMethod}</td>
                    <td>{payment.status}</td>
                    <td>{payment.paymentDate}</td>
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

export default Payments;
