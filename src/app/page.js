import Features from "./components/layout/Features";
import Hero from "./components/layout/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full ">
      <Hero />
      <Features />
    </div>
  );
}
