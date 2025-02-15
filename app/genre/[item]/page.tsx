import React from "react";
import GenreRender from "@/app/components/GenreRender";
import Link from "next/link";

type GenreProps = {
  params: Promise<{
    item: string;
  }>;
  searchParams: Promise<{
    genre: string;
  }>;
};

export default async function page(props: GenreProps) {
  const searchParams = await props.searchParams;

  const { genre } = searchParams;

  const params = await props.params;

  const { item } = params;

  const genresURL = `https://api.themoviedb.org/3/discover/movie?language=fr-FR&include_adult=false&page=1&sort_by=popularity.desc&with_genres=${item}`;

  const Options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `bearer ${process.env.TMDB_API_KEY}`,
    },
  };

  async function fetchDataGenre() {
    const res = await fetch(genresURL, Options);
    if (!res) {
      return console.log(Error);
    }
    return res.json();
  }

  const getDataGenre = await fetchDataGenre();
  const decodeGenre = decodeURI(genre);

  return (
    <div className="px-5 py-3 w-full space-y-3">
      <div className="text-white flex justify-center space-x-5">
        <p className="text-white bg-sky-600 bg-opacity-20 m-0.5 px-2 text-center flex items-center rounded-full leading-5 max-tablet:text-sm max-mobile-s:text-xs">
          <Link href={"/"}>Retour</Link>
        </p>
        <p className="text-2xl max-mobile-m:text-xl">
          {item && "Résultats trouvés pour : " + decodeGenre}
        </p>
      </div>
      <div className="">
        <GenreRender dataGenre={getDataGenre.results} />
      </div>
    </div>
  );
}
