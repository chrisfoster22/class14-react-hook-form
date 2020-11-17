import "./App.css";
import { Router } from "@reach/router";
import Home from "./Home";
import Restaurant from "./Restaurant";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Restaurant path="/restaurants/:restaurantId" />
      </Router>
    </div>
  );
}

export default App;
