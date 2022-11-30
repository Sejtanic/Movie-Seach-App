import "./Movie.css";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchMovie, fetchMovieTrailer } from "../../Utils/Api/api";
import Loading from "../../Components/Loading/Loading";
import { Link } from "react-router-dom";
import Video from "../../Components/Video/Video";
import { useSite } from "../../State/siteContext";
import Poster from "../../Components/Poster/Poster";
import Rating from "../../Components/Rating/Rating";

const Movie = () => {
  let { id } = useParams();
  const { type } = useSite();
  const { isLoading, data } = useQuery("movie", fetchMovie(type, id));
  const { data: dataTrailer } = useQuery(
    "movietrailer",
    fetchMovieTrailer(type, id)
  );
  let key = dataTrailer?.results[0]?.key;
  return (
    <div className="movie-style">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="movie-container-style">
          <Link to={"/"} className="navigate">
            {"<"}
          </Link>
          <div className="title-rating-style">
            <p>{type === "Movies" ? data?.title : data?.name}</p>
            <Rating rating={data.vote_average} />
          </div>
          {key && <Video videoKey={key} />}
          {!key && (
            <Poster
              path={data?.poster_path}
              alt={type === "Movies" ? data?.title : data?.name}
            />
          )}
          <p className="overview">{data?.overview}</p>
        </div>
      )}
    </div>
  );
};
export default Movie;
