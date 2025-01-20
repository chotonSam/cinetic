"use client"; // Mark this as client-side code for Next.js

import { fetchYouTubeTrailer } from "@/utils/fetchYouTubeTrailer"; // Import the YouTube fetch function
import { useEffect, useState } from "react";
import Modal from "./Modal";

const PlayButton = ({ movieTitle, setIsPlaying }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [loading, setLoading] = useState(false); // Added loading state

  // Fetch the trailer when movieTitle changes
  useEffect(() => {
    if (movieTitle) {
      setTrailerUrl(null); // Reset trailer URL when movieTitle changes
      setLoading(true); // Set loading to true when fetching a trailer

      const getTrailer = async () => {
        const url = await fetchYouTubeTrailer(movieTitle);
        console.log(movieTitle);
        setTrailerUrl(url);
        setLoading(false); // Set loading to false once the trailer is fetched
      };

      getTrailer();
    }
  }, [movieTitle]); // Dependency only on movieTitle, so it will trigger every time movieTitle changes

  const handlePlayTrailer = () => {
    setShowTrailer(true);
    setIsPlaying(true); // Set isPlaying to true when the video starts playing
  };

  const handleCloseModal = () => {
    setShowTrailer(false);
    setIsPlaying(false); // Set isPlaying to false when the video is closed
  };

  return (
    <div>
      <button
        onClick={handlePlayTrailer}
        className="bg-white text-black md:px-8 md:py-2 px-4 py-1 rounded-lg font-bold hover:bg-opacity-80"
      >
        ▶ Play
      </button>

      {/* Modal for displaying the trailer */}
      <Modal
        isOpen={showTrailer}
        onClose={handleCloseModal}
        trailerUrl={trailerUrl}
        loading={loading} // Pass loading state to Modal
      />

      {/* Show a message if no trailer was found */}
      {showTrailer && !trailerUrl && !loading && (
        <div className="mt-4 text-red-500">Trailer not found.</div>
      )}
    </div>
  );
};

export default PlayButton;
