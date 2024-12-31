import Image from "next/image";

export default function ModalMovieCard({
  setSearchValue,
  singleId,
  movie,
  onModalMovieCardClick,
  setIsModal,
}) {
  return (
    <div
      onClick={() => {
        onModalMovieCardClick(movie, singleId);
        setIsModal(false);
        setSearchValue("");
      }}
      className="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
        className="w-16 h-24 object-cover rounded"
        width={64}
        height={96}
      />
      <div>
        <h3 className="font-bold">{movie.title}</h3>
        <p className="text-sm text-gray-400">
          {movie.release_date?.substring(0, 4)}
        </p>
      </div>
    </div>
  );
}
