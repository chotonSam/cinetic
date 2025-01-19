import Image from "next/image";
import Link from "next/link";

export default function WatchCard({ movie, onRemove }) {
  return (
    <div className="bg-moviedb-black rounded-lg overflow-hidden shadow-lg group relative ">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.poster}`}
        alt="Armor"
        className="w-full max-h-[450px] object-cover cursor-pointer"
        width={250}
        height={450}
      />

      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <Link
          className="cursor-pointer hover:underline"
          href={`details/${movie.movieId}`}
        >
          <h2 className="md:text-xl text-lg font-bold text-light mb-2">
            {movie.title}
          </h2>
        </Link>
        <div className="flex justify-between items-center">
          <span className="text-primary">{movie.releaseYear.slice(0, 4)}</span>
          <button
            onClick={() => {
              onRemove(movie.id);
            }}
            className="bg-moviedb-red text-light px-3 py-1 rounded-full hover:bg-moviedb-red/80 transition"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
