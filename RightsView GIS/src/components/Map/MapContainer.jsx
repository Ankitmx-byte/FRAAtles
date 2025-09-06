import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapContainer.css';

const Map = () => {
  const position = [20.5937, 78.9629]; // Default center of India

  return (
    <MapContainer center={position} zoom={5} className="map-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A sample popup. <br /> We can show claim details here.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
