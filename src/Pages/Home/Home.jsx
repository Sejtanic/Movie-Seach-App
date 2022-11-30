import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import Container from "../../Components/Container/Container";
import Search from "../../Components/Search/Search";
import Toggle from "../../Components/Toggle/Toggle";
import debounce from "lodash.debounce";
import { fetchData } from "../../Utils/Api/api";
import "./Home.css";
import Loading from "../../Components/Loading/Loading";
import { useSite } from "../../State/siteContext";

const Home = () => {
  const { type, setType, query, setQuery } = useSite();
  const { isLoading, data, refetch } = useQuery(
    "movies",
    fetchData(type, query)
  );

  useEffect(() => {
    refetch();
  }, [type, query]);

  const handleSearch = (e) => {
    if (e.target.value.length < 3) return setQuery("");
    setQuery(e.target.value);
  };
  const debounceOnChange = debounce(handleSearch, 1000);

  const handleCategory = (e) => {
    setType(e.target.innerHTML);
  };
  console.log(data?.results);
  return (
    <div className="home-style">
      <Toggle>
        <Button label="Movies" onClick={handleCategory} />
        <Button label="Tv Shows" onClick={handleCategory} />
      </Toggle>
      <Search placeholder="search" onChange={debounceOnChange} value={query} />
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          {data?.results?.map((movie) => (
            <Card
              rating={movie.vote_average}
              id={movie.id}
              title={movie.title}
              name={movie.name}
              poster_path={movie.poster_path}
              key={movie.id}
            />
          ))}
        </Container>
      )}
    </div>
  );
};
export default Home;
