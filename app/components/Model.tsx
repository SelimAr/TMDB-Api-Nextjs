import HomeBanner from "./HomeBanner";
import ResearchContainer from "./ResearchContainer";

const trendingURL = `https://api.themoviedb.org/3/trending/movie/day?language=fr-FR`;
const genresURL = `https://api.themoviedb.org/3/genre/movie/list?language=fr-FR`;

const Options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `bearer ${process.env.TMDB_API_KEY}`,
  },
};

async function fetchDataTrending() {
  const res = await fetch(trendingURL, Options);
  if (!res) {
    return console.log(Error);
  }
  return res.json();
}

async function fetchDataGenres() {
  const res = await fetch(genresURL, Options);
  if (!res) {
    return console.log(Error);
  }
  return res.json();
}

export default async function Model() {
  const getDataTrending = await fetchDataTrending();
  const getDataGenres = await fetchDataGenres();

  return (
    <main className="block pt-3 px-20 w-full max-w-[90rem] mx-auto max-tablet:px-5 max-mobile-m:px-2">
      <HomeBanner dataTrending={getDataTrending.results} />
      <ResearchContainer dataGenres={getDataGenres.genres} />
    </main>
  );
}
