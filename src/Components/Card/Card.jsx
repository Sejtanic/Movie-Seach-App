import { useObserver } from "../../Hooks/observerHook";
import { Link } from "react-router-dom";
import "./Card.css";
import Poster from "../Poster/Poster";
const Card = ({ title, poster_path, name, id }) => {
  useObserver(".card-style", true, "pop-up", 1);
  return (
    <Link to={`/${id}`}>
      <div className="card-style">
        <Poster path={poster_path} />
        <h3>{title}</h3>
        <h3>{name}</h3>
      </div>
    </Link>
  );
};
export default Card;
