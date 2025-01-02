import Image from "next/image";
import AddToList from "./AddToList";
import Share from "./Share";

export default async function VideoDetails({ movie, casts }) {
  return (
    <div id="movieDetails" className="min-h-screen pt-20 mb-8">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70"></div>
        </div>

        <div className="relative container mx-auto px-4 pt-32">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                className="w-full rounded-lg shadow-lg"
                width={500}
                height={700}
              />
            </div>

            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>

              <div className="flex items-center mb-4 space-x-4">
                <span className="text-green-500"> {movie.release_date} </span>
                <span>| </span>
                <span>{movie.runtime} min</span>
              </div>

              <p className="text-lg mb-6">{movie.overview}</p>

              <div className="mb-6">
                <h3 className="text-gray-400 mb-2">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-gray-400 mb-2">Cast</h3>
                <div
                  className="flex space-x-6 overflow-x-scroll"
                  style={{ width: "800px" }}
                >
                  {casts.map((cast) => (
                    <div key={cast.id} className="text-center">
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                        alt={cast.name}
                        className="w-24 h-24 max-w-none rounded-full object-cover mb-2"
                        width={100}
                        height={100}
                      />
                      <p className="text-sm">{cast.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <AddToList movie={movie} />
              <Share movie={movie} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
