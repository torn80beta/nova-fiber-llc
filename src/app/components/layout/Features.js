import { MoveRight } from "lucide-react";

export default function Features() {
  return (
    // <div className="box-border max-w-7xl">
    // <div
    //   id="features"
    //   className=" min-h-84 max-w-360 flex flex-row flex-wrap items-center justify-center px-16"
    // >
    <div
      id="features"
      className=" py-20 max-w-360 px-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 items-center justify-center"
    >
      {/* Heading */}
      <div className="min-w-60 pb-6 pl-1.5  xl:mr-26 self-start xl:self-center">
        <p className="text-3xl font-bold  md:justify-self-start">
          Why <br /> Choosing Us
        </p>
      </div>

      {/* Features */}
      {/* <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-7"> */}
      <div className="max-w-56 justify-self-center">
        <p className="text-xl font-bold mb-5">Luxury facilities</p>
        <p className="text-sm mb-3.5 text-justify">
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
      <div className="max-w-56 justify-self-center">
        <p className="text-xl font-bold mb-5">Affordable Price</p>
        <p className="text-sm mb-3.5 text-justify">
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
      <div className="max-w-56 justify-self-center">
        <p className="text-xl font-bold mb-5">Many Choices</p>
        <p className="text-sm mb-3.5 text-justify">
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
      {/* </div> */}
    </div>
    // </div>
  );
}
