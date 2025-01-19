import ISO6391 from "iso-639-1";
import Image from "next/image";

const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

function getGenreNames(genreIds) {
  return genreIds.map((id) => genreMap[id] || "Unknown");
}

export default function CompireCard({ single, onClose, openModal }) {
  const empty = Object.keys(single).length > 1;

  const CardJSX = empty ? (
    <div className="bg-zinc-900 rounded-lg p-4 flex flex-col md:text-base text-sm">
      <div className="flex justify-end mb-4">
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          ✕
        </button>
      </div>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-2 h-full">
          <Image
            src={`${single.image}`}
            alt="Snowden"
            className="w-full rounded-lg mb-4 object-contain max-h-full"
            width={150}
            height={300}
          />
          <h2 className="text-xl font-bold mb-2 text-center">{single.name}</h2>
        </div>
        <div className="w-full space-y-4 col-span-3">
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Release Date:</span>
            <span className="float-right">{single.releaseYear}</span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Rating:</span>
            <span className="float-right">
              {parseFloat(single.rating.toFixed(1))}/10
            </span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Total Votes:</span>
            <span className="float-right">{single.voteCount}</span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Language:</span>
            <span className="float-right">
              {ISO6391.getName(single.originalLang)}
              {/* Ensure 'en' is the language code */}
            </span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Popularity:</span>
            <span className="float-right">
              {parseFloat(single.popularity.toFixed(1))}
            </span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Genres:</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {getGenreNames(single.genres).map((genre, index) => (
                <span
                  key={index}
                  className="bg-zinc-700 px-2 py-1 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-zinc-800 p-3 rounded md:block hidden ">
            <h2 className="text-xl font-bold">Overview</h2>
            <span className="text-sm">{single.overview}</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-zinc-900 rounded-lg p-4 flex flex-col min-h-[400px]">
      <div className="flex justify-end mb-4">
        <button className="text-gray-400 hover:text-white" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        <button
          onClick={openModal}
          className="bg-zinc-800 text-white px-6 py-3 rounded hover:bg-zinc-700 transition-colors cursor-pointer"
        >
          Select Movie
        </button>
      </div>
    </div>
  );

  return <>{CardJSX}</>;
}
