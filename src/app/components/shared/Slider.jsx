"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SimpleSlider() {
  const testimonials = [
    {
      id: 1,
      name: "Bang Upin",
      role: "Pedagang Asongan",
      quote:
        "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
      rating: 4,
      bgImage:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Ibuk Sukijan",
      role: "Ibu Rumah Tangga",
      quote:
        "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
      rating: 5,
      bgImage:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Mpok Ina",
      role: "Karyawan Swasta",
      quote: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
      rating: 5,
      bgImage:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?q=80&w=200&auto=format&fit=crop",
    },
    // Можно добавить еще карточки для скролла
    {
      id: 4,
      name: "Pak Budi",
      role: "Pengusaha",
      quote: "Desain interior yang sangat memuaskan dan elegan.",
      rating: 5,
      bgImage:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Ibuk Sukijan",
      role: "Ibu Rumah Tangga",
      quote:
        "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
      rating: 5,
      bgImage:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    },
  ];

  return (
    // <div className="relative max-w-90 sm:max-w-149 md:max-w-218.5 desktop:max-w-360 mx-auto bg-[#FAFAFA] py-20 px-4">
    <div className="relative max-w-full mx-auto py-20 px-10 ">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        autoplay={{
          pauseOnMouseEnter: true,
        }}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        }}
        loop={true}
        spaceBetween={40} // Расстояние между слайдами
        slidesPerView={1} // По умолчанию (мобильные)
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
        className="pb-16" // Отступ снизу для тени
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id} className="w-92.5 h-130 py-10">
            {/* === КАРТОЧКА === */}
            <div className="relative h-130  mx-auto group flex flex-col items-center">
              {/* Мягкая воздушная тень (реализуется через размытый div на заднем фоне) */}
              {/* <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-[20%] bg-black/15 blur-2xl rounded-full z-0"></div> */}

              {/* Основной контейнер с картинкой */}
              <div className="relative w-full sm:w-[370px] h-full rounded-4xl overflow-hidden z-10 shadow-sm">
                {/* Фоновая картинка интерьера */}
                <img
                  src={item.bgImage}
                  alt="Interior"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Легкий градиент поверх картинки, чтобы текст лучше читался (опционально) */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Белая плашка с текстом (позиционирована абсолютно внизу карточки) */}
                <div className="absolute bottom-5 left-5 right-5 bg-white rounded-3xl px-6 pb-8 pt-12 text-center shadow-lg">
                  {/* Аватар пользователя (выступает вверх) */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-[6px] border-white overflow-hidden bg-white shadow-sm">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Текстовый контент */}
                  <h3 className="text-[#1E1E1E] font-bold text-lg">
                    {item.name}
                  </h3>
                  <p className="text-[#8E8E8E] text-xs mt-1 mb-5">
                    {item.role}
                  </p>
                  <p className="text-[#1E1E1E] text-[14px] leading-relaxed mb-6 font-medium line-clamp-3">
                    {item.quote}
                  </p>

                  {/* Звезды рейтинга */}
                  <div className="flex justify-center gap-1.5">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-4 h-4 ${
                          index < item.rating
                            ? "text-[#F6B762]"
                            : "text-gray-200"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* === КОНЕЦ КАРТОЧКИ === */}
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>

      {/* Кастомная кнопка НАЗАД */}
      <button className="swiper-button-prev-custom absolute -left-[0%] top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:bg-gray-50 transition-colors z-20 cursor-pointer">
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>

      {/* Кастомная кнопка ВПЕРЕД */}
      <button className="swiper-button-next-custom absolute -right-[0%]  top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:bg-gray-50 transition-colors z-20 cursor-pointer">
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
  );
}
