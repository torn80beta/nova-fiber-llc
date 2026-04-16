import products from "@/lib/constants";
import Image from "next/image";

export default function Products() {
  return (
    <div className="py-10 max-w-360 px-16 bg-[#F7F7F7] flex flex-col gap-10">
      <p className="text-2xl sm:text-3xl font-bold text-center">
        Best Selling Products
      </p>
      <div
        id="products"
        className="grid grid-cols-1 sm:grid-cols-2 desktop:grid-cols-4 gap-7 items-center justify-center"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="relative overflow-hidden rounded-2xl h-98 w-54  justify-self-center cursor-pointer"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill={true}
              // width={268}
              // height={492}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
