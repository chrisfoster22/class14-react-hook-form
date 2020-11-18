import "./App.css";
import { Router } from "@reach/router";
import Home from "./Home";
import Restaurant from "./Restaurant";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Favorite Restaurants</h1>
      </header>
      <Router>
        <Home path="/" />
        <Restaurant path="/restaurants/:restaurantId" />
      </Router>
      <footer>
        <p>Copyright 2020</p>
      </footer>
    </div>
  );
}

export default App;
