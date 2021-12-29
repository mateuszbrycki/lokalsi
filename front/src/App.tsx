import React from 'react';
import './App.css';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

function App() {
  return (
      <div className="content">
        <div id="name">
          <h1>lokalsi.cc</h1>
        </div>
        <div id="slogan">
          <p>Wszystkie ustawki kolarskie w jednym miejscu!</p>
        </div>
          <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} id="map">
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MarkerClusterGroup>
                  <Marker position={[49.8397, 24.0297]}>
                      <Popup>
                          <b>Dzień:</b> poniedziałek<br />
                          <b>Godzina:</b> 17:00<br />
                          <a href="http://facebook.com" target="_blank">Grupa FB</a>
                      </Popup>
                  </Marker>
                  <Marker position={[52.2297, 21.0122]}>
                      <Popup>
                          <b>Dzień:</b> wtorek<br />
                          <b>Godzina:</b> 17:00<br />
                          <a href="http://facebook.com" target="_blank">Grupa FB</a>
                      </Popup>
                  </Marker>
                  <Marker position={[51.5074, -0.0901]}>
                      <Popup>
                          <b>Dzień:</b> środa<br />
                          <b>Godzina:</b> 17:00<br />
                          <a href="http://facebook.com" target="_blank">Grupa FB</a>
                      </Popup>
                  </Marker>
                  <Marker position={[51.505, -0.09]}>
                      <Popup>
                          <b>Dzień:</b> czwartek<br />
                          <b>Godzina:</b> 17:00<br />
                          <a href="http://facebook.com" target="_blank">Grupa FB</a>
                      </Popup>
                  </Marker>
              </MarkerClusterGroup>
          </MapContainer>
      </div>
  );
}

export default App;
