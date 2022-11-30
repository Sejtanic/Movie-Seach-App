import { useObserver } from "../../Hooks/observerHook";
import "./Card.css";
const Card = ({ title, poster_path, name }) => {
  useObserver(".card-style", true, "pop-up", 1);
  return (
    <div className="card-style">
      <img
        src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`}
        alt=""
      />
      <h3>{title}</h3>
      <h3>{name}</h3>
    </div>
  );
};
export default Card;
