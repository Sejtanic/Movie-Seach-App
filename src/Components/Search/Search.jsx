import "./Search.css";
const Search = ({ onChange, placeholder }) => {
  return (
    <input
      type="text"
      className="search-style"
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
    />
  );
};
export default Search;
