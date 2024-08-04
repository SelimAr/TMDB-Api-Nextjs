"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import getImageUrl from "@/lib/getImageUrl";
import { Movies } from "@/type";
import InformationsModal from "./InformationsModal";

export default function Cards(props: Movies) {
  const {
    poster_path,
    backdrop_path,
    title,
    id,
    overview,
    vote_average,
    release_date,
  } = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const activeModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else if (!modalIsOpen) {
      document.body.style.overflow = "auto";
    }
  }, [modalIsOpen]);

  return (
    <>
      <div onClick={activeModal} className="cards">
        <Image
          src={getImageUrl(poster_path)}
          key={id}
          alt={title}
          className="rounded-lg hover:scale-110"
          width={500}
          height={1000}
        />
      </div>
      {modalIsOpen && (
        <div className="w-full h-full fixed inset-0 z-20 bg-black bg-opacity-70 backdrop-blur-sm">
          <InformationsModal
            key={id}
            id={id}
            title={title}
            overview={overview}
            backdrop_path={backdrop_path}
            release_date={release_date}
            vote_average={vote_average}
            onClose={activeModal}
          />
        </div>
      )}
    </>
  );
}

/*

"accordion effect image css horizontal"

<div onClick={onClick} className="cards">
      <Image
        src={getImageUrl(poster_path)}
        key={id}
        alt={title}
        className="rounded-t-lg bg-cover object-fill w-full h-full max-h-52"
        width={100}
        height={200}
      />
      <div className="text-white p-1.5 rounded-b-lg bg-black bg-opacity-50 space-y-1 ">
        <p className="text-lg leading-5 h-10">{title}</p>
        <p className="line-clamp-3 leading-4 text-sm font-light max-mobile-m:line-clamp-2">
          {overview}
        </p>
      </div>
    </div>

    -- Blur bottom effect backdrop/poster --
    <div className="relative">
    <div className="absolute inset-0 bg-gradiant-to-b from-gray-200/0 via-gray-900/10 to-gray-300 z-10" />
    </div>

*/
