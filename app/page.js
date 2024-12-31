import Hero from "@/components/landing/Hero";
import MovieList from "@/components/landing/MovieList";
import { fetchMovies } from "@/utils/fetchMovies";

export default async function Home() {
  const populerData = await fetchMovies(`/api/movies/populer`);
  const trendingData = await fetchMovies(`/api/movies/trending`);
  const topratedData = await fetchMovies(`/api/movies/toprated`);

  return (
    <>
      <Hero />

      <div className="container mx-auto px-4 py-8">
        <MovieList movies={populerData.results} title={"Popular on MOVIE DB"} />
        <MovieList movies={trendingData.results} title={"Trending Now "} />
        <MovieList movies={topratedData.results} title={"Top Rated"} />
      </div>
    </>
  );
}
