import React, { createContext, useContext, useState, useEffect } from "react";

const FlagsContext = createContext();

export const useFlagsContext = () => {
  const context = useContext(FlagsContext);
  if (context === undefined) {
    throw new Error("useFlagsContext must be used within a FlagsProvider");
  }
  return context;
};

export const FlagsProvider = ({ children }) => {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const flagsData = data.map((country) => country.flags.png);
        setFlags(flagsData);
      } catch (error) {
        console.error("Error fetching flags:", error);
      }
    };

    fetchFlags();
  }, []);

  return (
    <FlagsContext.Provider value={flags}>{children}</FlagsContext.Provider>
  );
};
