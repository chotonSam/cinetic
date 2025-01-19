import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie }) {
  const releaseYear = movie.release_date
    ? movie.release_date.slice(0, 4)
    : "N/A";
  return (
    <div className="flex-shrink-0 md:w-48 w-36 cursor-pointer hover:scale-105 transition-transform">
      <Link href={`/details/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
          className="w-full rounded-lg"
          height={500}
          width={500}
        />
        <div className="mt-2">
          <h3 className="text-light text-sm font-bold truncate">
            {movie.original_title}
          </h3>
          {/* Displaying only the release year */}
          <p className="text-primary text-xs">{releaseYear}</p>
        </div>
      </Link>
    </div>
  );
}
