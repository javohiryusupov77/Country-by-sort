import React, { useState } from "react";
import { Button, Drawer } from "flowbite-react";
import { useCountryContext } from "./ContextProvide";

function RightDrawer() {
  const [isOpen, setIsOpen] = useState(true);
  const { selectedCountries } = useCountryContext();

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-end">
        <Button onClick={() => setIsOpen(true)}>Added Country</Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Selected Countries" />
        <Drawer.Items>
          <div className="space-y-4">
            {selectedCountries.map((country) => (
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
        </Drawer.Items>
      </Drawer>
    </>
  );
}

export default RightDrawer;
