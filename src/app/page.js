import Features from "./components/layout/Features";
import Hero from "./components/layout/Hero";
import Products from "./components/layout/Products";
import Experiences from "./components/layout/Experiences";
import Materials from "./components/layout/Materials";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <div className="flex flex-col items-center">
        <Features />
        <Products />
        <Experiences />
        <Materials />
      </div>
    </div>
  );
}
