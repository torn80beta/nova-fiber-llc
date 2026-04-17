import Features from "./components/layout/Features";
import Hero from "./components/layout/Hero";
import Products from "./components/layout/Products";
import Experiences from "./components/layout/Experiences";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <Features />
      <Products />
      <Experiences />
    </div>
  );
}
