import { useObserver } from "../../Hooks/observerHook";
import { Link } from "react-router-dom";
import "./Card.css";
import Poster from "../Poster/Poster";
import { ratingColorReturn } from "../../Utils/hellperFunctions";
const Card = ({ title, poster_path, name, id, rating }) => {
  useObserver(".card-style", true, "pop-up", 0.8);
  return (
    <Link to={`/${id}`}>
      <div
        className="card-style"
        style={{ border: `1px solid ${ratingColorReturn(rating)}` }}
      >
        <Poster path={poster_path} alt={title} />
        <h3>{title}</h3>
        <h3>{name}</h3>
      </div>
    </Link>
  );
};
export default Card;
