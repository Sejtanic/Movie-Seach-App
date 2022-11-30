import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Movie from "./Pages/Movie/Movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Movie />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Home /> */}
    </div>
  );
}

export default App;
