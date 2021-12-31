import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRidesView from "./rides/components/AllRidesView";
import AddRideModal from "./rides/components/AddRideModal";
import * as Icon from "react-bootstrap-icons";


function App() {
  return (
      <>
          <nav className="navbar navbar-expand-md">
              <a className="navbar-brand mx-auto" href="#">
                  <span className="navbar-logo">lokalsi.cc</span>
              </a>
                  <div className="me-sm-5 ms-sm-0 me-auto ms-auto">
                      <AddRideModal />
                  </div>
          </nav>
          <div className="container mt-5">
              <AllRidesView />
          </div>
          <footer className="text-center text-lg-start bg-light text-muted border-top mt-5">
              <section className="">
                  <div className="container text-center text-md-start mt-5">
                      <div className="row mt-3">
                          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                              <h6 className="text-uppercase fw-bold mb-4">
                                  lokalsi.cc
                              </h6>
                              <p>
                                  Tutaj będzie trochę tekstu o naszej misji.
                              </p>
                          </div>

                          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                              <h6 className="text-uppercase fw-bold mb-4">
                                  Kontakt
                              </h6>
                              <p>
                                  <Icon.Envelope className="me-2"/>
                                  lokalsicc@gmail.com
                              </p>
                          </div>
                      </div>
                  </div>
              </section>

              <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05);'}}>
                  © 2021 Copyright:
                  <a className="text-reset fw-bold ms-1" href="https://lokalsi.cc/">lokalsi.cc</a>
              </div>
          </footer>
      </>
  );
}

export default App;
