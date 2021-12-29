import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRidesView from "./rides/components/AllRidesView";

function App() {
  return (
      <>
          <nav className="navbar navbar-expand-md">
              <a className="navbar-brand ms-md-5 ms-sm-auto me-sm-auto" href="#"><span className="navbar-logo">lokalsi.cc</span></a>
          </nav>

          <div className="container mt-5">
              <AllRidesView />
          </div>


      </>
  );
}

export default App;
