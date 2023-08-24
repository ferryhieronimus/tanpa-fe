"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Tag } from "@/types";
import Link from "next/link";

export default function Category({ category }: { category: Tag[] }) {
  const slideCount = Math.min(category.length, 12);
  
  const renderSlides = () => {
    const slides = [];

    for (let i = 0; i < slideCount; i++) {
      slides.push(
        <SwiperSlide key={`slide-${i}`}>
          <li className='whitespace-nowrap text-neutral-500'>
            <Link href={`/tag/${category[i].id}`}>{category[i].name.toUpperCase()}</Link>
          </li>
        </SwiperSlide>
      );
    }

    return slides;
  };

  return (
    <div className='top-0 sticky z-10'>
      <div className="flex justify-center bg-white font-dmSans">
        <div className='relative w-full max-w-7xl items-center flex overflow-hidden h-14 mx-4 md:mx-8'>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={24}
            mousewheel
            modules={[Mousewheel, FreeMode, Navigation]}
            freeMode
            navigation={true}
          >
            {renderSlides()}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
