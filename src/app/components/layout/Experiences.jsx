import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function Experiences() {
  return (
    <div
      id="experiences"
      className="max-w-360 py-40 xl:py-60 grid grid-cols-1 xl:grid-cols-2 gap-30 items-center justify-center overflow-hidden"
    >
      {/* Основной контейнер с картинкой */}
      <div class="relative z-10 w-157.25 h-111.25">
        {/*  Декоративная белая подложка (сверху слева)*/}
        {/* <div class="absolute top-[-66] left-[-172] w-[600px] h-[66px] bg-[#F7F7F7] rounded-t-[20px] z-0"></div> */}
        <div class="absolute -top-1/7 -left-1/5 w-150 h-16.5 bg-[#F7F7F7] rounded-t-[20px] z-0"></div>

        {/*  Декоративная белая подложка (справа) */}
        <div class="absolute top-1/6 -right-1/11 w-15 h-75 bg-[#F7F7F7] rounded-r-[20px] z-0"></div>

        {/* ТЕНЬ */}
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-15 bg-linear-to-br from-black to-[#f8941b] blur-2xl rounded-full z-[-1]"></div>

        {/*  Сама фотография */}
        <Image src="/image/experiences.jpg" alt="Experiences" fill={true} />
      </div>

      <div className="flex flex-col gap-5">
        <p className="text-[1.25rem] text-[#E58411] tracking-widest">
          EXPERIENCE
        </p>

        <p className="text-4xl font-bold  md:justify-self-start max-w-104">
          We Provide You The <br /> Best Experience
        </p>

        <p className="max-w-139 text-[1.14rem]">
          You don’t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
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
  );
}
