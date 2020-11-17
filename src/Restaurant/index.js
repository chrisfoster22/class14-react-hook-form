import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Review from "../Review";

const Restaurant = (props) => {
  const [reviews, setReviews] = useState([]);
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    const getRestaurant = async () => {
      const response = await fetch(
        `http://localhost:3000/restaurants/${props.restaurantId}`
      );
      const restaurant = await response.json();
      setRestaurant(restaurant);
    };

    const getReviews = async () => {
      const response = await fetch(
        `http://localhost:3000/restaurants/${props.restaurantId}/reviews`
      );
      const reviews = await response.json();
      setReviews(reviews);
    };

    getRestaurant();
    getReviews();
  }, []);

  return (
    <div className="restaurant">
      <Link to="/">Back</Link>
      <h2>{restaurant.name}</h2>
      {reviews.map((review) => {
        return <Review stars={review.stars} text={review.text} />;
      })}
    </div>
  );
};

export default Restaurant;
