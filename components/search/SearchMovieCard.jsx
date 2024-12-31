import Image from "next/image";
import Link from "next/link";

export default function SearchMovieCard({ movie }) {
  return (
    <Link
      key={movie.id}
      href={`/details/${movie.id}`}
      className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="Avatar: The Way of Water"
        className="w-full aspect-[2/3] object-cover"
        width={400}
        height={600}
      />
      <div className="p-4">
        <h3 className="font-bold mb-2">{movie.title}</h3>
        <div className="flex justify-between text-sm text-gray-400">
          <span>
            {movie.release_date ? movie.release_date.slice(0, 4) : "N/A"}
          </span>
          <span>⭐ {parseFloat(movie.vote_average.toFixed(1))} </span>
        </div>
      </div>
    </Link>
  );
}
