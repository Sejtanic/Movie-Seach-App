import { ratingColorReturn } from "../../Utils/hellperFunctions";
import "./Rating.css";
const Rating = ({ rating }) => {
  return (
    <p className="rating-style" style={{ color: ratingColorReturn(rating) }}>
      {Math.round(rating * 10) / 10}
    </p>
  );
};
export default Rating;
