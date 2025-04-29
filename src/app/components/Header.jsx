import { Binary } from "lucide-react";

export const Header = () => {
  return (
    <div className="w-full h-[100px] bg-[#1a0b2e] flex justify-around">
      <div className="flex text-white items-center gap-130">
        <div>
          <Binary className="text-white w-[35px] h-[35px]" />
        </div>
        <div className="flex gap-50">
          <button>Home</button>
          <button>About</button>
          <button>Contact</button>
        </div>
      </div>
    </div>
  );
};
