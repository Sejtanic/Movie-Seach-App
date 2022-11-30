import React, { useContext, useState } from "react";

const SiteContext = React.createContext();
export const useSite = () => {
  return useContext(SiteContext);
};

export const SiteProvider = ({ children }) => {
  const [type, setType] = useState("Tv Shows");
  const [query, setQuery] = useState("");
  const value = {
    type,
    query,
    setQuery,
    setType,
  };
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};
