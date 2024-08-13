import React from "react";
import RightDrawer from "./Drawer";

function Header() {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between max-w-3xl px-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold cursor-pointer">
            <span className="text-[#87CEEB] relative z-10">CRYPTOFOLIO</span>
          </span>
        </div>
        <nav className="flex items-center space-x-6">
          <RightDrawer />
        </nav>
      </div>
    </header>
  );
}

export default Header;
