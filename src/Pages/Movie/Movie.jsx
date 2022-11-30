import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchMovie } from "../../Utils/Api/api";

const Movie = () => {
  let { id } = useParams();
  const { isLoading, data } = useQuery("movie", fetchMovie("tv", id));
  console.log(data);

  console.log(id);
  return <p>{data?.name}</p>;
};
export default Movie;
