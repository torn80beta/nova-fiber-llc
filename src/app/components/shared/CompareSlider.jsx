"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function CompareSlider({ item }) {
  return (
    <div className=" h-130 w-full mx-auto group flex flex-col items-center">
      {/* Container */}
      <div className=" w-full sm:w-92.5 h-full rounded-4xl overflow-hidden z-10 shadow-sm object-cover">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={item.before}
              // srcSet="..."
              alt={item.name}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={item.after}
              // srcSet="..."
              alt={item.name}
            />
          }
          defaultPosition={50}
          // portrait
          // changePositionOnHover
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
}
