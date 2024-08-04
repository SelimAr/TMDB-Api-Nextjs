"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Navigation, Scrollbar, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import { MoviesTrending } from "@/type";
import getImageUrl from "@/lib/getImageUrl";

export default function HomeBanner({
  dataTrending,
}: {
  dataTrending: MoviesTrending[];
}) {
  const [isData, setIsData] = useState<MoviesTrending[]>(dataTrending);

  return (
    <Swiper
      modules={[Navigation, Scrollbar, Autoplay, EffectFade]}
      slidesPerView={1}
      centeredSlides={true}
      navigation={{ enabled: false }}
      autoplay={{
        delay: 4000,
        pauseOnMouseEnter: true,
      }}
      effect="coverflow"
      className="rounded-lg relative"
    >
      {isData.map((data) => (
        <SwiperSlide>
          <Image
            key={data.id}
            src={getImageUrl(data.backdrop_path, true)}
            alt={data.title}
            width={1920}
            height={1080}
            quality={100}
            className="object-center object-cover max-h-80 rounded-lg"
          />

          <div className="absolute left-3 bottom-3 z-40 w-3/4 h-fit space-y-2 max-mobile-m:left-1.5 max-mobile-m:bottom-1.5">
            <p className="text-3xl text-white font-semibold line-clamp-2 max-tablet:text-2xl max-mobile-m:text-xl">
              {data.title}
            </p>

            <p
              className="leading-5 text-lg text-white line-clamp-3 max-tablet:text-base max-tablet:leading-5 max-mobile-s:text-sm
             max-mobile-s:leading-4"
            >
              {data.overview}
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b bg-gradiant-to-b from-gray-100/0 via-gray-900/10 to-gray-900/90 z-30" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
