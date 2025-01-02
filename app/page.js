import Hero from "@/components/landing/Hero";
import MovieList from "@/components/landing/MovieList";
import { fetchMovies } from "@/utils/fetchMovies";

export default async function Home() {
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    console.error("NEXT_PUBLIC_BASE_URL is not set.");
    return <p>Configuration error. Please set NEXT_PUBLIC_BASE_URL.</p>;
  }

  let populerData, trendingData, topratedData;

  try {
    populerData = await fetchMovies(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/populer`
    );
    trendingData = await fetchMovies(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/trending`
    );
    topratedData = await fetchMovies(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/toprated`
    );
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return <p>Failed to load movie data. Please try again later.</p>;
  }

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
