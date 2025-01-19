const { fetchMovies } = require("@/utils/fetchMovies");

export default async function Hero() {
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    return null;
  }
  const trendingData = await fetchMovies(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/populer`
  );

  const firstMovie = trendingData.results[0];

  console.log(firstMovie);

  return (
    <div
      id="hero"
      className="relative md:h-screen h-[450px]"
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
        <button className="bg-white text-black md:px-8 md:py-2 px-4 py-1 rounded-lg font-bold hover:bg-opacity-80">
          ▶ Play
        </button>
      </div>
    </div>
  );
}
