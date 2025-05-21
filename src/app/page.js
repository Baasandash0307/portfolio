import { Body } from "./components/Body";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="your-element min-h-screen bg-black text-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <Header />
        <Body />
      </div>
    </div>
  );
}
