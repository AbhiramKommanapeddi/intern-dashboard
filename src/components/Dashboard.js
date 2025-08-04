import React, { useEffect, useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [internData, setInternData] = useState({});

  useEffect(() => {
    // Simulated API call
    fetch('http://localhost:5000/api/intern')
      .then((res) => res.json())
      .then((data) => setInternData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Intern Dashboard</h1>
      <div className="dashboard-section">
        <p><span className="bold">Name:</span> {internData.name}</p>
        <p><span className="bold">Referral Code:</span> {internData.referralCode}</p>
        <p><span className="bold">Total Donations:</span> ₹{internData.donations}</p>
      </div>

      <div className="rewards-section">
        <h2>Rewards Section</h2>
        <ul>
          <li>₹5000 raised – T-Shirt</li>
          <li>₹7500 raised – Certificate</li>
          <li>₹10000 raised – Surprise Gift</li>
        </ul>
      </div>

      <a href="/leaderboard">View Leaderboard</a>
    </div>
  );
}

export default Dashboard;
