import React from 'react';
import './Sidebar.css';

// Dummy data for display
const claims = [
  { id: 'CLA001', name: 'John Doe', date: '2024-08-15', status: 'Approved' },
  { id: 'CLA002', name: 'Jane Smith', date: '2024-08-16', status: 'Pending' },
  { id: 'CLA003', name: 'Peter Jones', date: '2024-08-17', status: 'Rejected' },
];

const Sidebar = () => {
  return (
    <aside className="app-sidebar">
      <div className="sidebar-section">
        <h3>Search & Filter</h3>
        <input type="text" placeholder="Search District" className="search-input" />
        <input type="text" placeholder="Search Village" className="search-input" />
      </div>

      <div className="sidebar-section">
        <h3>Layer Controls</h3>
        <label>
          <input type="checkbox" /> Forest Cover
        </label>
        <label>
          <input type="checkbox" /> Water Bodies
        </label>
        <label>
          <input type="checkbox" /> Built-up Area
        </label>
      </div>

      <div className="sidebar-section claims-section">
        <h3>Claim Applications</h3>
        <div className="claims-list">
          {claims.map(claim => (
            <div key={claim.id} className={`claim-item ${claim.status.toLowerCase()}`}>
              <p><strong>ID:</strong> {claim.id}</p>
              <p>{claim.name}</p>
              <div className="claim-footer">
                <span>{claim.date}</span>
                <span className="status">{claim.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
