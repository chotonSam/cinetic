"use client";

import AddMovieButton from "@/components/compare/addMovieButton";
import CompireCard from "@/components/compare/CompireCard";
import SearchModal from "@/components/compare/SearchModal";
import { useState } from "react";

export default function ComparePage() {
  const [isModal, setIsModal] = useState(false);

  const [data, setData] = useState([
    {
      id: crypto.randomUUID(),
    },
  ]);

  const onModalMovieCardClick = (movie, singleId) => {
    const addData = {
      name: movie.title,
      rating: movie.vote_average,
      voteCount: movie.vote_count,
      releaseYear: movie.release_date,
      originalLang: movie.original_language,
      popularity: movie.popularity,
      overview: movie.overview,
      genres: movie.genre_ids,
      image: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
    };

    const updatedData = data.map((item) =>
      item.id === singleId ? { ...item, ...addData } : item
    );
    console.log(updatedData);

    setData(updatedData);
  };

  const addMovieHandler = () => {
    setData([...data, { id: crypto.randomUUID() }]);
  };

  const closeMovieHandler = (id) => {
    const removeData = data.filter((item) => item.id !== id);
    setData(removeData);
  };

  return (
    <>
      <main className="container mx-auto px-4 pt-24 pb-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Compare Movies</h1>
          <AddMovieButton onAdd={addMovieHandler} />
        </div>

        {/* <!-- Movie Comparison Container --> */}
        <div className="grid gap-6 md:grid-cols-2">
          {data.map((single) => (
            <div key={single.id}>
              <CompireCard
                single={single}
                onClose={() => closeMovieHandler(single.id)}
                openModal={() => setIsModal(true)}
              />

              <SearchModal
                isModal={isModal}
                singleId={single.id}
                setIsModal={setIsModal}
                onModalMovieCardClick={onModalMovieCardClick}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
