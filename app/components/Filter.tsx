"use client";
import React from "react";
import { MoviesGenres } from "@/type";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Filter(props: MoviesGenres) {
  const { id, name } = props;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      onClick={() => router.push(`/genre/${id}?genre=${name.toLowerCase()}`)}
      key={id}
      className={`${
        pathname === `/genre/${id}` ? "bg-black" : "bg-sky-600 bg-opacity-20"
      } text-white  m-0.5 px-2 text-center rounded-full leading-5 max-tablet:text-sm 
        hover:bg-sky-800`}
    >
      {name}
    </button>
  );
}
