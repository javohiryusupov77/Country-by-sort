import React, { useState } from "react";
import { Button, Drawer } from "flowbite-react";
import { useCoinContext } from "./ContextProvide"; // Updated import

function RightDrawer() {
  const [isOpen, setIsOpen] = useState(true);
  const { selectedCoins, setSelectedCoins } = useCoinContext(); // Updated context values
  const handleClose = () => setIsOpen(false);

  function deleteItem() {
    setSelectedCoins([]); // Clear the list
    localStorage.removeItem("selectedCoins"); // Updated localStorage key
  }

  return (
    <>
      <div className="flex items-center justify-end">
        <Button onClick={() => setIsOpen(true)}>Watch List</Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Selected Coins" />
        <Drawer.Items>
          <div className="space-y-4">
            {selectedCoins.length === 0
              ? "No coins selected"
              : selectedCoins.map((coin) => (
                  <div key={coin.id} className="flex items-center">
                    <img
                      src={coin.image}
                      alt={`Logo of ${coin.name}`}
                      className="h-6 w-6 mr-2"
                    />
                    <span>{coin.name}</span>
                  </div>
                ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={deleteItem}
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Clear All
            </button>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

export default RightDrawer;
