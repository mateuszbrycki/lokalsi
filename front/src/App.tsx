import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRidesView from "./rides/components/AllRidesView";

function App() {
  return (
      <>
          <nav className="navbar navbar-expand-md">
              <a className="navbar-brand ms-lg-5" href="#"><span className="navbar-logo">lokalsi.cc</span></a>

              <div className="navbar-collapse collapse dual-collapse2 me-lg-5">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item ms-3">
                          <a className="nav-link" href="#">O nas</a>
                      </li>
                      <li className="nav-item ms-3">
                          <a className="nav-link" href="#">Kontakt</a>
                      </li>
                  </ul>
              </div>
          </nav>

          <div className="container mt-xxl-5">
              <AllRidesView />
          </div>
      </>
  );
}

export default App;
