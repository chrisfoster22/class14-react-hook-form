import React, { useState } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./Home";
import Restaurant from "./Restaurant";
import Button from "./Button";

function App() {
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 5000);
  };

  return (
    <div className="App">
      {toastMessage && <div className="toast">{toastMessage}</div>}
      <header>
        <h1>My Favorite Restaurants</h1>
      </header>
      <Router>
        <Home path="/" />
        <Restaurant path="/restaurants/:restaurantId" showToast={showToast} />
        <Button path="/button" showToast={showToast} />
      </Router>
      <footer>
        <p>Copyright 2020</p>
      </footer>
    </div>
  );
}

export default App;
