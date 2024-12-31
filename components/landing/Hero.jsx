const { fetchMovies } = require("@/utils/fetchMovies");

export default async function Hero() {
  const trendingData = await fetchMovies(
    `${process.env.API_BASE_URL}/api/movies/populer`
  );

  const firstMovie = trendingData.results[0];

  console.log(firstMovie);

  return (
    <div
      id="hero"
      className="relative h-screen"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${firstMovie.backdrop_path})`,
        backgroundSize: `cover`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
      <div className="absolute bottom-0 left-0 p-12">
        <h1 id="heroTitle" className="text-5xl font-bold mb-4">
          {firstMovie.title}
        </h1>
        <p id="heroOverview" className="text-lg max-w-2xl mb-4">
          {firstMovie.overview}
        </p>
        <button className="bg-white text-black px-8 py-2 rounded-lg font-bold hover:bg-opacity-80">
          ▶ Play
        </button>
      </div>
    </div>
  );
}
