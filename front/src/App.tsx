import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRidesView from "./rides/components/AllRidesView";
import AddRideModal from "./rides/components/AddRideModal";

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
      </>
  );
}

export default App;
