"use client"; // Mark this as client-side code for Next.js

import { fetchYouTubeTrailer } from "@/utils/fetchYouTubeTrailer"; // Import the YouTube fetch function
import { useEffect, useState } from "react";
import Modal from "./Modal";

const PlayButton = ({ movieTitle }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState(null);

  useEffect(() => {
    if (showTrailer && trailerUrl === null) {
      // Fetch trailer only when the button is clicked and the trailer isn't already fetched
      const getTrailer = async () => {
        const url = await fetchYouTubeTrailer(movieTitle);
        setTrailerUrl(url);
      };

      getTrailer();
    }
  }, [showTrailer, trailerUrl, movieTitle]);

  const handlePlayTrailer = () => {
    setShowTrailer(true);
  };

  const handleCloseModal = () => {
    setShowTrailer(false);
  };

  return (
    <div>
      <button
        onClick={handlePlayTrailer}
        className="bg-white text-black md:px-8 md:py-2 px-4 py-1 rounded-lg font-bold hover:bg-opacity-80"
      >
        ▶ Play {movieTitle}
      </button>

      {/* Modal for displaying the trailer */}
      <Modal
        isOpen={showTrailer}
        onClose={handleCloseModal}
        trailerUrl={trailerUrl}
      />

      {/* Show a message if no trailer was found */}
      {showTrailer && !trailerUrl && (
        <div className="mt-4 text-red-500">Trailer not found.</div>
      )}
    </div>
  );
};

export default PlayButton;
