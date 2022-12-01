import "./Search.css";
const Search = ({ onChange, placeholder, value }) => {
  return (
    <input
      defaultValue={value}
      type="text"
      className="search-style"
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
export default Search;
