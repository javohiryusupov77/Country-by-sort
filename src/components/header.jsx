import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import RightDrawer from "./Drawer";
import { useCurrencyContext } from "./CurrencyContext";

function Header() {
  const { currency, setCurrency } = useCurrencyContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
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
        title: "You are in home",
      });
    } else {
      navigate("/");
    }
  };

  return (
    <header className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between max-w-3xl px-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold cursor-pointer">
            <span
              onClick={handleClick}
              className="text-[#87CEEB] relative z-10"
            >
              CRYPTOFOLIO
            </span>
          </span>
        </div>
        <nav className="flex items-center">
          <select
            value={currency.toUpperCase()}
            onChange={(e) => setCurrency(e.target.value.toUpperCase())}
            className="bg-black text-white block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="USD">USD</option>
            <option value="TRY">TRY</option>
            <option value="ETH">ETH</option>
          </select>
          <RightDrawer />
        </nav>
      </div>
    </header>
  );
}

export default Header;
