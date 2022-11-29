import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import Container from "../../Components/Container/Container";
import Search from "../../Components/Search/Search";
import Toggle from "../../Components/Toggle/Toggle";
import { fetchData } from "../../Utils/Api/api";
import "./Home.css";
const Home = () => {
  const [type, setType] = useState("Tv Shows");
  const { isLoading, data, refetch } = useQuery("movies", fetchData(type));

  useEffect(() => {
    refetch();
  }, [type]);
  const handleSearch = (e) => {};
  const handleCategory = (e) => {
    setType(e.target.innerHTML);
  };

  return (
    <div className="home-style">
      <Toggle>
        <Button label="Movies" onClick={handleCategory} />
        <Button label="Tv Shows" onClick={handleCategory} />
      </Toggle>
      <Search placeholder="search" onChange={handleSearch} />
      <Container>
        {data?.results?.map((movie) => (
          <Card
            title={movie.title}
            name={movie.name}
            poster_path={movie.poster_path}
            key={movie.id}
          />
        ))}
      </Container>
    </div>
  );
};
export default Home;
