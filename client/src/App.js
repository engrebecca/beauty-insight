import React from "react";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Searchbar />
    </div>
  );
}


export default App;
