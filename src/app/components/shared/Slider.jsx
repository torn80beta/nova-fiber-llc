'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    company: 'Tech Solutions Inc.',
    text: 'Excellent service! The fiber connection has been incredibly fast and reliable. Our business operations have significantly improved.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    company: 'Digital Marketing Co.',
    text: 'Outstanding customer support and lightning-fast speeds. We couldn\'t be happier with our decision to switch.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Chen',
    company: 'Creative Studios',
    text: 'Professional installation, great performance, and very competitive pricing. Highly recommended!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emma Davis',
    company: 'E-Commerce Plus',
    text: 'The reliability of this fiber service is unmatched. Our downtime has been virtually eliminated.',
    rating: 5,
  },
];

export default function Slider() {
  return (
    <div className="w-full px-4 py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="testimonials-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-between min-h-64">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#E58411]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm mb-4 flex-grow">{testimonial.text}</p>

              {/* Author Info */}
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-xs text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for Swiper */}
      <style jsx>{`
        :global(.swiper) {
          padding-bottom: 50px;
        }

        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          background-color: #e58411;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          color: white;
        }

        :global(.swiper-button-next:after),
        :global(.swiper-button-prev:after) {
          font-size: 18px;
        }

        :global(.swiper-button-next:hover),
        :global(.swiper-button-prev:hover) {
          background-color: #d46e0a;
        }

        :global(.swiper-pagination-bullet) {
          background-color: #e58411;
        }

        :global(.swiper-pagination-bullet-active) {
          background-color: #d46e0a;
        }
      `}</style>
    </div>
  );
}
