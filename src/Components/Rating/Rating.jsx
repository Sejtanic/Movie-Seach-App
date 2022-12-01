import { ratingColorReturn } from "../../Utils/Functions/hellperFunctions";
import "./Rating.css";
const Rating = ({ rating }) => {
  return (
    <p className="rating-style" style={{ color: ratingColorReturn(rating) }}>
      {Math.round(rating * 10) / 10}
    </p>
  );
};
export default Rating;
