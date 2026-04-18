import products from "@/lib/constants";
import Image from "next/image";

export default function Products() {
  return (
    <div
      id="products"
      className="py-10 max-w-360 px-22.5 md:px-37 bg-[#F7F7F7] flex flex-col gap-10"
    >
      <p className="text-3xl sm:text-4xl font-bold text-center">
        Best Selling Products
      </p>
      <div
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
              // width={268}
              // height={492}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
