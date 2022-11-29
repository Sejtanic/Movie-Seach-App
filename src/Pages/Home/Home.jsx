import Button from "../../Components/Button/Button";
import Search from "../../Components/Search/Search";
import Toggle from "../../Components/Toggle/Toggle";
import "./Home.css";
const Home = () => {
  const handleSearch = (e) => {};

  const handleCategory = (e) => {};
  return (
    <div className="home-style">
      <Toggle>
        <Button label="Movies" onClick={handleCategory} />
        <Button label="Tv Shows" onClick={handleCategory} />
      </Toggle>
      <Search placeholder="search" onChange={handleSearch} />
    </div>
  );
};
export default Home;
