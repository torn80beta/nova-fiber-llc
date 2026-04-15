import { MoveRight } from "lucide-react";

export default function Features() {
  return (
    <div className="box-border max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 ">
      <div className="h-96 flex flex-row justify-between items-center">
        <div className="max-w-60">
          <p className="text-4xl font-bold">
            Why <br /> Choosing Us
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-7">
          <div className="max-w-72">
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
          <div className="max-w-72">
            <p className="text-2xl font-bold mb-5">Affordable Price</p>
            <p className="mb-3.5 text-justify">
              You can get a workspace of the highst quality at an affordable
              price and still enjoy the facilities that are oly here.
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
          <div className="max-w-72">
            <p className="text-2xl font-bold mb-5">Many Choices</p>
            <p className="mb-3.5 text-justify">
              We provide many unique work space choices so that you can choose
              the workspace to your liking.
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
        </div>
      </div>
    </div>
  );
}
