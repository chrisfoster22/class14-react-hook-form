import React from "react";

const Review = (props) => {
  return (
    <div className="review">
      <p>{props.stars}</p>
      <p>{props.text}</p>
    </div>
  );
};

export default Review;
