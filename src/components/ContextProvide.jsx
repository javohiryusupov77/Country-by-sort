import React, { createContext, useContext, useState, useEffect } from 'react';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    const savedCountries = JSON.parse(localStorage.getItem('selectedCountries')) || [];
    setSelectedCountries(savedCountries);
  }, []);

  const toggleCountry = (country) => {
    const isSelected = selectedCountries.some(c => c.cca3 === country.cca3);

    if (isSelected) {
      const updatedCountries = selectedCountries.filter(c => c.cca3 !== country.cca3);
      setSelectedCountries(updatedCountries);
      localStorage.setItem('selectedCountries', JSON.stringify(updatedCountries));
    } else {
      const updatedCountries = [...selectedCountries, country];
      setSelectedCountries(updatedCountries);
      localStorage.setItem('selectedCountries', JSON.stringify(updatedCountries));
    }
  };

  return (
    <CountryContext.Provider value={{ selectedCountries, toggleCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => useContext(CountryContext);
