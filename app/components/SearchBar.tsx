"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const [isSearch, setIsSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSearch.length === 0) {
      return;
    } else {
      router.push(`/search/${isSearch}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center w-1/2 max-tablet:w-full"
    >
      <input
        type="text"
        placeholder="Recherchez un film, une serie..."
        className="input"
        value={isSearch}
        onChange={(e) => setIsSearch(e.target.value)}
      />
      <button className="">
        <Search
          color="white"
          className="bg-sky-600 bg-opacity-20 rounded-tr-md rounded-br-md size-9 max-tablet:size-8 "
        />
      </button>
    </form>
  );
}
