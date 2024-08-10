import React, { useState } from "react";
import { Button, Drawer } from "flowbite-react";
import { useCountryContext } from "./ContextProvide";

function RightDrawer() {
  const [isOpen, setIsOpen] = useState(true);
  const { selectedCountries, setSelectedCountries } = useCountryContext();
  const handleClose = () => setIsOpen(false);
  function deleteItem() {
    setSelectedCountries("");
    localStorage.removeItem("selectedCountries");
  }

  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-end">
        <Button onClick={() => setIsOpen(true)}>Added Country</Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Selected Countries" />
        <Drawer.Items>
          <div className="space-y-4">
            {selectedCountries ===  "" ? "" : selectedCountries.map((country) => (
              <div key={country.cca3} className="flex items-center">
                <img
                  src={country.flags.png}
                  alt={`Flag of ${country.name.common}`}
                  className="h-6 w-8 mr-2"
                />
                <span>{country.name.common}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button onClick={deleteItem} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Clear All
            </button>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

export default RightDrawer;
