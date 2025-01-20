"use client";

import { useEffect, useState } from "react";
import PlayButton from "./PlayButton";

const HeroClient = ({ trendingData }) => {
  const latestMovies = trendingData.results.slice(0, 5); // Limit to 5 movies
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false); // Track fade-out animation
  const [isPlaying, setIsPlaying] = useState(false); // Track if the video is playing

  const firstMovie = latestMovies[currentIndex];

  useEffect(() => {
    if (isPlaying) return; // Pause the slideshow if the video is playing

    const interval = setInterval(() => {
      // Start fade-out animation
      setIsFadingOut(true);

      setTimeout(() => {
        // After fade-out animation, update the slide
        setCurrentIndex((prevIndex) => (prevIndex + 1) % latestMovies.length);
        setIsFadingOut(false); // Trigger fade-in animation
      }, 1000); // Match the transition duration (1s)
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying, latestMovies.length]);

  if (!firstMovie) return <div>Loading...</div>;

  return (
    <div>
      {/* Hero for large devices */}
      <div
        className={`relative h-screen md:block hidden transition-opacity duration-1000 ease-in-out ${
          isFadingOut ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${firstMovie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
        <div className="absolute bottom-0 left-0 md:p-12 p-6">
          <h1 className="md:text-5xl text-3xl font-bold md:mb-4 mb-2">
            {firstMovie.title}
          </h1>
          <p className="md:text-lg text-base max-w-2xl mb-4">
            {firstMovie.overview}
          </p>
          {/* Pass the video playing state and handler to PlayButton */}
          <PlayButton
            movieTitle={firstMovie.title}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        </div>
      </div>

      {/* Hero for small devices */}
      <div
        className={`relative h-screen md:hidden transition-opacity duration-1000 ease-in-out ${
          isFadingOut ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${firstMovie.poster_path})`,
          backgroundSize: "contain",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
        <div className="absolute bottom-0 left-0 md:p-12 p-6">
          <h1 className="md:text-5xl text-3xl font-bold md:mb-4 mb-2">
            {firstMovie.title}
          </h1>
          <p className="md:text-lg text-base max-w-2xl mb-4">
            {firstMovie.overview}
          </p>
          {/* Pass the video playing state and handler to PlayButton */}
          <PlayButton
            movieTitle={firstMovie.title}
            setIsPlaying={setIsPlaying}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroClient;
