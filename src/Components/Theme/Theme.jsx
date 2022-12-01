import { useState } from "react";
import "./Theme.css";
const Theme = () => {
  const [theme, setTheme] = useState(true);
  const body = document.querySelector("body");
  body.style.backgroundColor = theme ? "black" : "white";
  body.style.color = theme ? "white" : "black";
  const themeHandler = () => {
    setTheme((prev) => !prev);
  };
  return (
    <p
      className={theme ? "theme-style Light-on" : "theme-style"}
      onClick={themeHandler}
    >
      &#128161;
    </p>
  );
};
export default Theme;
