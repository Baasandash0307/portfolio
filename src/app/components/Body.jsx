import { MapPin, Verified } from "lucide-react";

export const Body = () => {
  return (
    <div className="h-full flex justify-center items-center flex-col">
      <div>
        <h1 className="flex w-full text-white font-bold text-[22vw]">DASHA</h1>
      </div>

      <div className="flex w-full justify-between">
        <div className="flex flex-col items-center">
          <MapPin  className="text-green-500 mb-3"/>
          <div>Lives in Ulaanbaatar</div>
          <div className="text-neutral-500">Mongolia</div>
        </div>

        <div className="flex flex-col items-center">
          <MapPin className="mb-3"/>
          <div>Lives in Ulaanbaatar</div>
          <div>Mongolia</div>
        </div>

        <div className="flex flex-col items-center">
          <Verified className="text-blue-500 mb-3" />
          <div>Full-Stack</div>
          <div className="text-neutral-500">Software Engineer</div>
        </div>
      </div>
    </div>
  );
};
