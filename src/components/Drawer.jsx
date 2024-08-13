import React, { useState } from "react";
import { Button, Drawer } from "flowbite-react";
import { useCoinContext } from "./ContextProvide";

function RightDrawer() {
  const [isOpen, setIsOpen] = useState(true);
  const { selectedCoins, setSelectedCoins } = useCoinContext();
  const handleClose = () => setIsOpen(false);

  function deleteItem() {
    setSelectedCoins([]);
    localStorage.removeItem("selectedCoins");
  }

  return (
    <>
      <div className="flex items-center justify-end p-4">
        <Button onClick={() => setIsOpen(true)}>Watch List</Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Selected Coins" />
        <Drawer.Items>
          <div className="p-4">
            {selectedCoins.length === 0 ? (
              <p className="text-center text-gray-500">No coins selected</p>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {selectedCoins.map((coin) => (
                  <div
                    key={coin.id}
                    className="flex items-center space-x-2 p-2 border border-gray-200 rounded-lg shadow-sm"
                  >
                    <img
                      src={coin.image}
                      alt={`Logo of ${coin.name}`}
                      className="h-8 w-8"
                    />
                    <span className="text-black font-medium">{coin.name}</span>
                  </div>
                ))}
              </div>
            )}
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
