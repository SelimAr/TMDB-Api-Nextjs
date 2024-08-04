import React from "react";
import { Minimize2 } from "lucide-react";
import Image from "next/image";
import AverageRating from "./AverageRating";
import { ModalProps } from "@/type";
import getImageUrl from "@/lib/getImageUrl";

export default function InformationsModal(props: ModalProps) {
  const {
    onClose,
    title,
    id,
    overview,
    backdrop_path,
    release_date,
    vote_average,
  } = props;

  return (
    <div className="w-full h-fit max-w-3xl m-auto absolute inset-0 rounded-lg">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b rounded-lg bg-gradiant-to-b from-gray-100/0 via-zinc-900/10 to-zinc-900/80 z-30" />
        <Image
          src={getImageUrl(backdrop_path, true)}
          key={id}
          alt={title}
          width={1920}
          height={1080}
          className="rounded-lg inset-0 m-auto z-30 max-w-3xl bg-cover"
        />
        <Minimize2
          color="white"
          size={28}
          onClick={onClose}
          className="cursor-pointer m-2 absolute right-0 top-0 z-50 max-mobile-m:size-6"
        />
        <div
          className="text-white px-5 pb-5 block absolute z-40 bottom-0 left-0 space-y-2 w-full max-w-[30rem]
           max-mobile-m:px-2 max-mobile-m:w-2/3"
        >
          <p
            key={id}
            className="text-2xl font-semibold line-clamp-4 max-tablet:line-clamp-2 max-mobile-m:text-xl"
          >
            {title}
          </p>
          <p
            key={id}
            className="leading-5 line-clamp-5 max-mobile-m:text-sm max-mobile-m:leading-4"
          >
            {overview}
          </p>
        </div>

        <div
          className="text-white px-5 pb-10 block absolute z-40 bottom-0 right-0 space-y-2 max-w-[18rem]
           max-tablet:pb-5 max-mobile-m:px-2"
        >
          <div
            className="flex items-center space-x-5 max-mobile-m:block max-mobile-m:space-x-0 max-mobile-m:space-y-4 
          max-mobile-s:space-y-2"
          >
            <AverageRating rating={vote_average} />
            <div className="leading-5 max-mobile-m:text-md block max-mobile-s:text-sm">
              <p>Date de sortie :</p>
              <span className="italic">{release_date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
