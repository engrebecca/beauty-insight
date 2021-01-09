import React from "react";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Homepage />
    </div>
  );
}


export default App;
