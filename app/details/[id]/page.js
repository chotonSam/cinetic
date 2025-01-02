import VideoDetails from "@/components/details/VideoDetails";
import { fetchMovies } from "@/utils/fetchMovies";
import dynamic from "next/dynamic";

const MovieList = dynamic(() => import("@/components/landing/MovieList"), {
  ssr: false,
});

export default async function DetailsPage({ params: { id } }) {
  if (!id) {
    return <p>Invalid movie ID.</p>;
  }

  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    console.error("Environment variable NEXT_PUBLIC_BASE_URL is not set.");
    return <p>Configuration error. Please contact support.</p>;
  }

  try {
    // Fetch movie details
    const movieResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/movie/${id}`
    );

    if (!movieResponse.ok) {
      throw new Error(`Failed to fetch movie details: ${movieResponse.status}`);
    }

    const movieData = await movieResponse.json();

    // Fetch similar movies
    const similerMovies = await fetchMovies(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/movie/${id}/similer`
    );

    // Fetch cast details
    const castResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/movie/${id}/credits`
    );

    if (!castResponse.ok) {
      throw new Error(`Failed to fetch cast details: ${castResponse.status}`);
    }

    const castData = await castResponse.json();

    // Render page
    return (
      <>
        <VideoDetails movie={movieData} casts={castData.cast || []} />

        <div className="container mx-auto px-4 py-8">
          {similerMovies?.results?.length > 0 ? (
            <MovieList
              movies={similerMovies.results}
              title={"More Like This"}
            />
          ) : (
            <p>No similar movies found.</p>
          )}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error in DetailsPage:", error);
    return <p>Failed to load movie details. Please try again later.</p>;
  }
}
