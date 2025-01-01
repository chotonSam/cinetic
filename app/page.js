import Hero from "@/components/landing/Hero";
import MovieList from "@/components/landing/MovieList";
import { fetchMovies } from "@/utils/fetchMovies";

export default async function Home() {
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    return null;
  }
  const populerData = await fetchMovies(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/populer`
  );
  const trendingData = await fetchMovies(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/trending`
  );
  const topratedData = await fetchMovies(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/toprated`
  );

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
