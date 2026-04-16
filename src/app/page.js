import Features from "./components/layout/Features";
import Hero from "./components/layout/Hero";
import Products from "./components/layout/Products";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full ">
      <Hero />
      <Features />
      <Products />
    </div>
  );
}
