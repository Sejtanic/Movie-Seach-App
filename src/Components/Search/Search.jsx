import React from "react";
import { useSite } from "../../State/siteContext";
import "./Search.css";
const Search = ({ onChange, placeholder, value }) => {
  const { query } = useSite();
  return (
    <input
      value={query}
      type="text"
      className="search-style"
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
export default React.memo(Search);
