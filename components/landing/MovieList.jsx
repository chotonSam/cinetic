import MovieCard from "./MovieCard";

export default function MovieList({ movies, title }) {
  return (
    <section className="mb-8">
      <h2 className="md:text-2xl text-xl font-bold mb-4">{title}</h2>
      <div id="trendingMovies" className="flex space-x-4 overflow-x-auto pb-4">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
}
