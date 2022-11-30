import { useState } from "react";
import { ratingColorReturn } from "../../Utils/hellperFunctions";
import "./Rating.css";
const Rating = ({ rating }) => {
  //   let color = "red";
  //   if (rating < 5) color = "red";
  //   if (rating > 5 && rating < 7.5) color = "orange";
  //   if (rating > 7.5) color = "green";
  return <p style={{ color: ratingColorReturn(rating) }}>{rating}</p>;
};
export default Rating;
