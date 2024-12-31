import Image from "next/image";
import AddToList from "./AddToList";
import Share from "./Share";

export default async function VideoDetails({ movie, casts }) {
  return (
    <div id="movieDetails" class="min-h-screen pt-20 mb-8">
      <div class="relative h-screen">
        <div class="absolute inset-0">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
            class="w-full h-full object-cover"
            fill
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70"></div>
        </div>

        <div class="relative container mx-auto px-4 pt-32">
          <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/3">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                class="w-full rounded-lg shadow-lg"
                width={500}
                height={700}
              />
            </div>

            <div class="md:w-2/3">
              <h1 class="text-4xl font-bold mb-4">{movie.title}</h1>

              <div class="flex items-center mb-4 space-x-4">
                <span class="text-green-500"> {movie.release_date} </span>
                <span>| </span>
                <span>{movie.runtime} min</span>
              </div>

              <p class="text-lg mb-6">{movie.overview}</p>

              <div class="mb-6">
                <h3 class="text-gray-400 mb-2">Genres</h3>
                <div class="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      class="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>

              <div class="mb-6">
                <h3 class="text-gray-400 mb-2">Cast</h3>
                <div
                  class="flex space-x-6 overflow-x-scroll"
                  style={{ width: "800px" }}
                >
                  {casts.map((cast) => (
                    <div key={cast.id} class="text-center">
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                        alt={cast.name}
                        class="w-24 h-24 max-w-none rounded-full object-cover mb-2"
                        width={100}
                        height={100}
                      />
                      <p class="text-sm">{cast.name}</p>
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
