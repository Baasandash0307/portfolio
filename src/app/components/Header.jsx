"use client";

import { useEffect, useState } from "react";

export const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <div className="w-full h-[100px] text-white">
      <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <p className="font-bold text-neutral-500">LOCAL/</p>
          <span className="text-sm font-bold text-[16px]">{formattedTime}</span>
        </div>
        <button className="border-2 border-white py-2 px-4 hover:bg-white hover:text-black cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 rounded-full font-bold">
          CONTACT NOW
        </button>
      </div>
    </div>
  );
};
