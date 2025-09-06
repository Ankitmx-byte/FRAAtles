import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Map from './components/Map/MapContainer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
