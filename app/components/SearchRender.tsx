"use client";
import React, { useState, useEffect } from "react";
import { Movies } from "@/type";
import Cards from "./Cards";

export default function SearchRender({ dataSearch }: { dataSearch: Movies[] }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isResearch, setIsResearch] = useState<Movies[]>(dataSearch);

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
      {isResearch.map((data) => (
        <Cards key={data.id} onClick={activeModal} {...data} />
      ))}
    </div>
  );
}
