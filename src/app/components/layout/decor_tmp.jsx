import Image from "next/image";

export default function decor_tmp() {
  return (
    // Container
    <div className="relative z-10 w-157.25 h-111.25 flex items-center justify-center">
      {/*  Top left decor */}
      <div className="absolute -top-1/7 -left-1/5 w-150 h-16.5 bg-[#F7F7F7] rounded-t-[20px] z-0"></div>

      {/*  Right decor */}
      <div className="absolute top-1/6 -right-1/11 w-15 h-75 bg-[#F7F7F7] rounded-r-[20px] z-0"></div>

      {/* Shadow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-15 bg-linear-to-br from-black to-[#f8941b] blur-2xl rounded-full z-[-1]"></div>

      {/*  Image */}
      <Image src="/image/experiences.jpg" alt="Experiences" fill={true} />
    </div>
  );
}
