import React from 'react'

const Button = () => {
  return (
    <>
      <div className="flex gap-20">
        <button className="border border-[#87CEEB] hover:bg-[#87CEEB] hover:text-black text-white font-bold py-2 px-4 rounded">
          24 Hours
        </button>
        <button className="border border-[#87CEEB] hover:bg-[#87CEEB] hover:text-black text-white font-bold py-2 px-4 rounded">
          30 Days
        </button>
        <button className="border border-[#87CEEB] hover:bg-[#87CEEB] hover:text-black text-white font-bold py-2 px-4 rounded">
          3 Months
        </button>
        <button className="border border-[#87CEEB] hover:bg-[#87CEEB] hover:text-black text-white font-bold py-2 px-4 rounded">
          1 Year
        </button>
      </div>
    </>
  );
}

export default Button;