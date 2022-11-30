import "./Movie.css";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchMovie, fetchMovieTrailer } from "../../Utils/Api/api";
import Loading from "../../Components/Loading/Loading";
import { Link } from "react-router-dom";
import Video from "../../Components/Video/Video";

const Movie = () => {
  let { id } = useParams();
  const { isLoading, data } = useQuery("movie", fetchMovie("tv", id));
  const { isLoading: isLoadingTrailer, data: dataTrailer } = useQuery(
    "movietrailer",
    fetchMovieTrailer("tv", id)
  );
  //   console.log(data);
  //   console.log(dataTrailer?.results[0]?.key);
  //   console.log(id);
  let key = dataTrailer?.results[0]?.key;
  console.log(key);
  return (
    <div className="movie-style">
      <div className="movie-container-style">
        <Link to={"/"} className="navigate">
          {"<"}
        </Link>
        <Video videoKey={key} />
        {!key && (
          <img
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${data?.poster_path}`}
            alt=""
          />
        )}
        <h2>{data?.name}</h2>
        <p>{data?.overview}</p>
      </div>
    </div>
  );
};
export default Movie;
