import { fetchMovies } from "@/utils/fetchMovies";
import PlayButton from "./PlayButton"; // Import the PlayButton component

export default async function Hero() {
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    return null;
  }

  const trendingData = await fetchMovies(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/populer`
  );

  const firstMovie = trendingData.results[0];

  return (
    <div>
      {/* hero for large device  */}
      <div
        className="relative h-screen md:block hidden"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${firstMovie.backdrop_path})`,
          backgroundSize: `cover`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
        <div className="absolute bottom-0 left-0 md:p-12 p-6">
          <h1
            id="heroTitle"
            className="md:text-5xl text-3xl font-bold md:mb-4 mb-2"
          >
            {firstMovie.title}
          </h1>
          <p id="heroOverview" className="md:text-lg text-base max-w-2xl mb-4">
            {firstMovie.overview}
          </p>

          {/* Pass necessary data to the PlayButton Client Component */}
          <PlayButton movieTitle={firstMovie.title} />
        </div>
      </div>

      {/* hero for small device  */}
      <div
        className="relative h-screen md:hidden"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${firstMovie.poster_path})`,
          backgroundSize: `contain`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
        <div className="absolute bottom-0 left-0 md:p-12 p-6">
          <h1
            id="heroTitle"
            className="md:text-5xl text-3xl font-bold md:mb-4 mb-2"
          >
            {firstMovie.title}
          </h1>
          <p id="heroOverview" className="md:text-lg text-base max-w-2xl mb-4">
            {firstMovie.overview}
          </p>

          {/* Pass necessary data to the PlayButton Client Component */}
          <PlayButton movieTitle={firstMovie.title} />
        </div>
      </div>
    </div>
  );
}
