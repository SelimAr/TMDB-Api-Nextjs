import Container from "./components/Container";

const discoverURL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=fr-FR&page=1&sort_by=popularity.desc&api_key=${process.env.TMDB_API_KEY}`;

const Options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

async function fetchDataDiscover() {
  const res = await fetch(discoverURL, Options);
  if (!res) {
    return console.log(Error);
  }
  return res.json();
}

export default async function Home() {
  const getDataDiscover = await fetchDataDiscover();

  return (
    <main className="block w-full max-w-[90rem] mx-auto max-tablet:px-5 max-mobile-m:px-2">
      <Container dataDiscover={getDataDiscover.results} />
    </main>
  );
}
