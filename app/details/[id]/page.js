import VideoDetails from "@/components/details/VideoDetails";

import { fetchMovies } from "@/utils/fetchMovies";
import dynamic from "next/dynamic";

const MovieList = dynamic(() => import("@/components/landing/MovieList"), {
  ssr: false,
});

export default async function DetailsPage({ params: { id } }) {
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    return null;
  }
  // movie details fetching
  const movieResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/movie/${id}`
  );
  const movieData = await movieResponse.json();

  // similer movie fetching
  const similerMovies = await fetchMovies(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/movie/${id}/similer`
  );

  const castResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/movie/${id}/credits`
  );
  const castData = await castResponse.json();

  return (
    <>
      <VideoDetails movie={movieData} casts={castData.cast} />

      <div className="container mx-auto px-4 py-8">
        <MovieList movies={similerMovies.results} title={"More Like This"} />
      </div>
    </>
  );
}
