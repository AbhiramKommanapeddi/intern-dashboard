import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/leaderboard')
      .then(res => setLeaders(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Leaderboard</h1>
      <ol>
        {leaders.map((item, index) => (
          <li key={index}>{item.name} — ₹{item.donations}</li>
        ))}
      </ol>
      <a href="/">← Back to Dashboard</a>
    </div>
  );
}

export default Leaderboard;
