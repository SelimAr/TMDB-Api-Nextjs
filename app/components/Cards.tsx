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
