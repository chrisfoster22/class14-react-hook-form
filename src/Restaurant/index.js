import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "@reach/router";
import Review from "../Review";

const Restaurant = (props) => {
  const [reviews, setReviews] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [successfulPost, setSuccessfulPost] = useState(false);

  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = async (formData) => {
    const newReview = {
      ...formData,
      stars: parseInt(formData.stars),
    };
    const response = await fetch(
      `http://localhost:3000/restaurants/${props.restaurantId}/reviews`,
      {
        method: "POST",
        body: JSON.stringify(newReview),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const createdReview = await response.json();
    reset();
    setReviews([...reviews, createdReview]);
    setSuccessfulPost(true);
    setTimeout(() => {
      setSuccessfulPost(false);
    }, 5000);
  };

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
      {successfulPost && (
        <div
          style={{
            padding: "5px",
            backgroundColor: "lightgreen",
            color: "white",
            fontSize: 20,
          }}
        >
          You've successfully created a review!
        </div>
      )}
      <Link to="/">Back</Link>
      <h2>{restaurant.name}</h2>
      {reviews.map((review) => {
        return <Review stars={review.stars} text={review.text} />;
      })}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Text</label>
        <input
          name="text"
          ref={register({ required: "You must write a review" })}
        />
        <p style={{ color: "red" }}>{errors.text && errors.text.message}</p>
        <label>Stars</label>
        <input
          name="stars"
          type="number"
          min="0"
          max="5"
          ref={register({ required: "Please rate your experience" })}
        />
        <p style={{ color: "red" }}>{errors.stars && errors.stars.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Restaurant;
