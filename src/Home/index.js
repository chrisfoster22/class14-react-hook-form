import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import "./index.css";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      const response = await fetch(`http://localhost:3000/restaurants`);
      const restaurants = await response.json();
      setRestaurants(restaurants);
    };

    getRestaurants();
  }, []);

  return (
    <div className="restaurants">
      {restaurants.map((restaurant) => {
        return (
          <div className="restaurant-card">
            <Link to={`/restaurants/${restaurant.id}`}>
              <h2>{restaurant.name}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
