import { MoveRight } from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      className="py-10 desktop:py-20 max-w-360 w-full px-16 grid grid-cols-1 sm:grid-cols-2 desktop:grid-cols-4 gap-7 items-center justify-center"
    >
      {/* Heading */}
      <div className="min-w-60 pb-6 pl-1.5 desktop:mr-26 self-start desktop:self-center">
        <p className="text-4xl font-bold  md:justify-self-start">
          Why <br /> Choosing Us
        </p>
      </div>

      {/* Features */}

      <div className="max-w-71 justify-self-center">
        <p className="text-2xl font-bold mb-5">Luxury facilities</p>
        <p className="mb-3.5 text-justify">
          The advantage of hiring a workspace with us is that gives you
          comfortable service and all-around facilities.
        </p>
        <div className="flex flex-row justify-start items-center gap-3.5 cursor-pointer">
          <p className="text-amber-600">More Info</p>
          <MoveRight
            className="text-amber-600 max-w-12"
            strokeWidth={0.5}
            size={42}
          />
        </div>
      </div>
      <div className="max-w-71 desktop:justify-self-center">
        <p className="text-2xl font-bold mb-5">Affordable Price</p>
        <p className="mb-3.5 text-justify">
          You can get a workspace of the highst quality at an affordable price
          and still enjoy the facilities that are oly here.
        </p>
        <div className="flex flex-row justify-start items-center gap-3.5 cursor-pointer">
          <p className="text-amber-600">More Info</p>
          <MoveRight
            className="text-amber-600 max-w-12"
            strokeWidth={0.5}
            size={42}
          />
        </div>
      </div>
      <div className="max-w-71 justify-self-center">
        <p className="text-2xl font-bold mb-5">Many Choices</p>
        <p className="mb-3.5 text-justify">
          We provide many unique work space choices so that you can choose the
          workspace to your liking.
        </p>
        <div className="flex flex-row justify-start items-center gap-3.5 cursor-pointer">
          <p className="text-amber-600">More Info</p>
          <MoveRight
            className="text-amber-600 max-w-12"
            strokeWidth={0.5}
            size={42}
          />
        </div>
      </div>
    </section>
  );
}
