import React from "react";
import SearchRender from "@/app/components/SearchRender";
import Link from "next/link";

export default async function page({
  params: { item },
}: {
  params: { item: string };
}) {
  const searchURL = `https://api.themoviedb.org/3/search/multi?query=${item}&include_adult=false&language=fr-FR&page=1&api_key=${process.env.TMDB_API_KEY}`;

  const Options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  async function fetchDataSearch() {
    const res = await fetch(searchURL, Options);
    if (!res) {
      return console.log(Error);
    }
    return res.json();
  }

  const getDataSearch = await fetchDataSearch();
  const decodeItem = decodeURI(item);

  return (
    <div className="px-5 py-3 w-full space-y-3">
      <div className="text-white flex justify-center space-x-5">
        <p className="text-white bg-sky-600 bg-opacity-20 m-0.5 px-2 text-center flex items-center rounded-full leading-5 max-tablet:text-sm max-mobile-s:text-xs">
          <Link href={"/"}>Retour</Link>
        </p>
        <p className="text-2xl max-mobile-m:text-xl max-mobile-s:text-lg">
          {item && "Résultats trouvés pour : " + decodeItem}
        </p>
      </div>
      <div className="">
        <SearchRender dataSearch={getDataSearch.results} />
      </div>
    </div>
  );
}
