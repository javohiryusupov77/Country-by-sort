import React, { useState } from "react";
import { Button, Drawer } from "flowbite-react";
import { useCoinContext } from "./ContextProvide";
import Swal from "sweetalert2";

function RightDrawer() {
  const [isOpen, setIsOpen] = useState(true);
  const { selectedCoins, setSelectedCoins } = useCoinContext();
  const handleClose = () => setIsOpen(false);

  function HangleRemove(coinId) {
    const updatedCoins = selectedCoins.filter((coin) => coin.id !== coinId);
    setSelectedCoins(updatedCoins);
    localStorage.setItem("selectedCoins", JSON.stringify(updatedCoins));
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }

  function deleteItem() {
    setSelectedCoins([]);
    localStorage.removeItem("selectedCoins");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }

  return (
    <>
      <div className="flex items-center justify-end p-4">
        <Button className="w-28" onClick={() => setIsOpen(true)}>
          Watch List
        </Button>
      </div>
      <Drawer
        className="bg-gray-400"
        open={isOpen}
        onClose={handleClose}
        position="right"
      >
        <Drawer.Header title="WatchList" className="bg-gray-400 text-white" />
        <Drawer.Items>
          <div className="p-4">
            {selectedCoins.length === 0 ? (
              <p className="text-center text-gray-500">No coins selected</p>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {selectedCoins.map((coin) => (
                  <div
                    key={coin.id}
                    className="flex flex-col items-center space-x-2 p-2 bg-black text-white border border-gray-200 rounded-lg shadow-sm"
                  >
                    <img
                      src={coin.image}
                      alt={`Logo of ${coin.name}`}
                      className="h-8 w-8"
                    />
                    <span>${coin.current_price}</span>
                    <button
                      onClick={() => HangleRemove(coin.id)}
                      className="bg-red-600 px-2 text-white"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={deleteItem}
              className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                selectedCoins.length === 0
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={selectedCoins.length === 0}
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
