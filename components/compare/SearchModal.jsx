import { fetchMovies } from "@/utils/fetchMovies"; // Assuming this function is defined elsewhere
import { useEffect, useState } from "react";
import ModalMovieCard from "./ModalMovieCard";

export default function SearchModal({
  isModal,
  singleId,
  setIsModal,
  onModalMovieCardClick,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (searchValue) {
      const fetchData = async () => {
        const data = await fetchMovies(
          `https://cinetic-db.netlify.app/api/movies/search?name=${searchValue}`
        );
        setSearchData(data.results);
      };
      fetchData();
    } else {
      setSearchData([]);
    }
  }, [searchValue]);

  return isModal ? (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Search Movie</h2>
          <button
            onClick={() => setIsModal(false)}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          placeholder="Type movie name..."
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <div className="max-h-96 overflow-y-auto">
          {searchData.length > 0 ? (
            searchData.map((movie) => (
              <ModalMovieCard
                setSearchValue={setSearchValue}
                singleId={singleId}
                key={movie.id}
                movie={movie}
                onModalMovieCardClick={onModalMovieCardClick}
                setIsModal={setIsModal}
              />
            ))
          ) : (
            <p className="text-gray-400">No results found.</p>
          )}
        </div>
      </div>
    </div>
  ) : null; // If isModal is false, return null
}
