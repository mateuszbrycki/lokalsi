import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRidesView from "./rides/components/AllRidesView";
import Footer from "./common/components/Footer";
import Navbar from "./common/components/Navbar";


function App() {
  return (
      <>
          <Navbar />
          <div className="container mt-5">
              <AllRidesView />
          </div>
          <Footer />
      </>
  );
}

export default App;
