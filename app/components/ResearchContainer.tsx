"use client";
import React, { useState } from "react";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import { MoviesGenres } from "@/type";

export default function ResearchContainer({
  dataGenres,
}: {
  dataGenres: MoviesGenres[];
}) {
  const [isData, setIsData] = useState<MoviesGenres[]>(dataGenres);

  return (
    <div className="w-full flex flex-wrap justify-center items-center px-5 mt-2 space-x-5 max-tablet:space-x-0 max-tablet:space-y-2">
      <SearchBar />
      <div className="w-1/3 overflow-x-scroll flex max-tablet:w-full">
        {isData?.map((data) => (
          <Filter key={data.id} id={data.id} name={data.name} />
        ))}
      </div>
    </div>
  );
}
