import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <nav style={{ padding: '20px' }}>
      <h2>FoodSathi Dashboard</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><Link to="/">FoodSathi</Link></li>
        <li><Link to="/Dashboard">Account</Link></li>
        <li><Link to="/form">Join Us</Link></li>
        <li><Link to ="/track-donation-donor">Track Donation</Link></li>
        <li><Link to="/Contributions">Contributions</Link></li>
        <li><Link to="/Settings">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
