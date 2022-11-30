import { useObserver } from "../../Hooks/observerHook";
import { Link } from "react-router-dom";
import "./Card.css";
import Poster from "../Poster/Poster";
import { ratingColorReturn } from "../../Utils/hellperFunctions";
import { useState } from "react";
const Card = ({ title, poster_path, name, id, rating, backdrop_path }) => {
  useObserver(".card-style", true, "pop-up", 0.8);
  const [image, setImage] = useState(poster_path);
  const handleMouseEnter = () => {
    setImage(backdrop_path);
  };
  const handleMouseLeave = () => {
    setImage(poster_path);
  };
  return (
    <Link to={`/${id}`}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="card-style"
        style={{ borderTop: `1px solid ${ratingColorReturn(rating)}` }}
      >
        <Poster path={image} alt={title || name} />
        <h3>{title}</h3>
        <h3>{name}</h3>
      </div>
    </Link>
  );
};
export default Card;
