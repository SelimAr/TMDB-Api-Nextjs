"use client";
import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { Movies } from "@/type";

export default function Container({
  dataDiscover,
}: {
  dataDiscover: Movies[];
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isData, setIsData] = useState<Movies[]>(dataDiscover);

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
    <div className="w-full block ">
      <div className="w-full flex justify-center flex-wrap">
        {isData.map((data) => (
          <Cards key={data.id} onClick={activeModal} {...data} />
        ))}
      </div>
    </div>
  );
}
