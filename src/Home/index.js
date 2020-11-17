import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

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
          <Link to={`/restaurants/${restaurant.id}`}>
            <h2>{restaurant.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
