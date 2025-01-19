import Image from "next/image";
import MovieList from "../landing/MovieList";
import AddToList from "./AddToList";
import Share from "./Share";

export default async function VideoDetails({ movie, casts, similerMovies }) {
  return (
    <div id="movieDetails" className="min-h-screen md:pt-20 mb-8">
      <div className="relative h-screen">
        <div className="absolute inset-0 md:block ">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover "
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70"></div>
        </div>

        <div className="relative container mx-auto px-4 pt-32">
          <div className="flex flex-col md:flex-row  gap-8">
            <div className="md:w-1/3 flex justify-center md:flex-none">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                className="md:w-full w-[300px]   rounded-lg shadow-lg"
                width={500}
                height={700}
              />
            </div>

            <div className="md:w-2/3">
              <h1 className="md:text-4xl text-3xl font-bold mb-4">
                {movie.title}
              </h1>

              <div className="flex items-center mb-4 space-x-4">
                <span className="text-green-500 md:text-base text-sm">
                  {" "}
                  {movie.release_date}{" "}
                </span>
                <span>| </span>
                <span>{movie.runtime} min</span>
              </div>

              <p className="md:text-lg text-base mb-6">{movie.overview}</p>

              <div className="mb-6">
                <h3 className="text-gray-400 mb-2 ">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-3 py-1 bg-gray-800 rounded-full md:text-sm text-xs"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-gray-400 mb-2">Cast</h3>
                <div className="flex space-x-6 overflow-x-scroll md:w-[800px]">
                  {casts.map((cast) => (
                    <div key={cast.id} className="text-center">
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                        alt={cast.name}
                        className="md:w-24 md:h-24 h-20 w-20 max-w-none rounded-full object-cover mb-2"
                        width={100}
                        height={100}
                      />
                      <p className="md:text-sm text-xs ">{cast.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <AddToList movie={movie} />
              <Share movie={movie} />
            </div>
            <div className="md:hidden">
              <MovieList
                movies={similerMovies.results}
                title={"More Like This"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
