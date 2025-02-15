"use client";
import React, { useState, useEffect } from "react";
import { Movies } from "@/type";
import Cards from "./Cards";

export default function GenreRender({ dataGenre }: { dataGenre: Movies[] }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isGenre, setIsGenre] = useState<Movies[]>(dataGenre);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else if (!modalIsOpen) {
      document.body.style.overflow = "auto";
    }
  }, [modalIsOpen]);

  const activeModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="w-full flex justify-center flex-wrap">
      {isGenre?.length > 0 &&
        isGenre?.map((data) => (
          <Cards key={data.id} onClick={activeModal} {...data} />
        ))}
    </div>
  );
}
