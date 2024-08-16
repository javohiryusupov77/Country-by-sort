import React, { createContext, useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
  const [selectedCoins, setSelectedCoins] = useState([]);

  useEffect(() => {
    const savedCoins = JSON.parse(localStorage.getItem("selectedCoins")) || [];
    setSelectedCoins(savedCoins);
  }, []);

  const toggleCoin = (coin) => {
    const isSelected = selectedCoins.some((c) => c.id === coin.id);

    if (isSelected) {
      const updatedCoins = selectedCoins.filter((c) => c.id !== coin.id);
      setSelectedCoins(updatedCoins);
      localStorage.setItem("selectedCoins", JSON.stringify(updatedCoins));
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "deleted successfully",
      });
      
    } else {
      const updatedCoins = [...selectedCoins, coin];
      setSelectedCoins(updatedCoins);
      localStorage.setItem("selectedCoins", JSON.stringify(updatedCoins));
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "added into Carusel and Drawer",
      });
    }
  };

  return (
    <CoinContext.Provider
      value={{ selectedCoins, setSelectedCoins, toggleCoin }}
    >
      {children}
    </CoinContext.Provider>
  );
};

export const useCoinContext = () => useContext(CoinContext);
