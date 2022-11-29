import React, { useContext, useState } from "react";

const SiteContext = React.createContext();
export const useSiteData = () => {
  return useContext(SiteContext);
};

export const SiteProvider = ({ children }) => {
  const haris = "haris";
  const value = {
    haris,
  };
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};
