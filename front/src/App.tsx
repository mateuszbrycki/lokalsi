import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRidesView from "./rides/components/AllRidesView";
import AddRideModal from "./rides/components/AddRideModal";

function App() {
  return (
      <>
          <nav className="navbar navbar-expand-md">
              <a className="navbar-brand ms-auto me-auto ms-sm-auto me-sm-auto" href="#">
                  <span className="navbar-logo">lokalsi.cc</span>
              </a>
              <div className="me-5 my-auto">
                  <div className="w-100 text-center">
                      <AddRideModal />
                  </div>
              </div>
          </nav>
          <div className="container mt-5">
              <AllRidesView />
          </div>
      </>
  );
}

export default App;
