"use client";

import { products } from "@/lib/constants";
import Image from "next/image";
import Slider from "../shared/Slider";
import { works } from "@/lib/constants";
import CompareSlider from "../shared/CompareSlider";

export default function Products() {
  return (
    <section
      id="products"
      // className="py-10 max-w-360 px-22.5 md:px-37 bg-[#F7F7F7] flex flex-col gap-10"
      className="max-w-360 w-full py-5 flex flex-col items-center justify-center overflow-hidden"
    >
      <p className="text-3xl sm:text-4xl font-bold text-center">
        Impressive Results
      </p>

      <div className="max-w-90 sm:max-w-149 md:max-w-218.5 desktop:max-w-360 flex flex-col items-center">
        <Slider slides={works} CardComponent={CompareSlider} />
      </div>

      {/* <div
        id="products"
        className="grid grid-cols-1 sm:grid-cols-2 desktop:grid-cols-4 gap-10.5 items-center justify-center"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="relative overflow-hidden rounded-3xl h-123 w-67  justify-self-center cursor-pointer"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill={true}
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        ))}
      </div> */}
    </section>
  );
}
