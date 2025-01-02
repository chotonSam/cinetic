"use client";
import { addMovieAction } from "@/actions";
import { useAuth } from "@/hooks/useAuth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
const mongoose = require("mongoose");

export default function AddToList({ movie }) {
  const router = useRouter();
  const [added, setAdded] = useState(false);
  const { auth } = useAuth();

  const [isPending, startTransition] = useTransition();

  async function addWatchHandler(movie) {
    if (auth) {
      const watchData = {
        title: movie.title,
        poster: movie.poster_path,
        releaseYear: movie.release_date,
        movieId: movie.id,
        user: auth?.id,
      };

      try {
        await addMovieAction(watchData); // Ensure the action is awaited
        setAdded(true);
      } catch (error) {
        console.log("Failed to add movie to watchlist:", error);
      }
    } else {
      Cookies.set("lastRoute", window.location.pathname);
      router.push("/login");
    }
  }

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-4">
        {added ? (
          <div className="text-center">
            <button className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-checks"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 12l5 5l10 -10" />
                <path d="M2 12l5 5m5 -5l5 -5" />
              </svg>
              Added to Wacth List
            </button>
          </div>
        ) : (
          <div className="text-center">
            <button
              onClick={() =>
                startTransition(() => {
                  addWatchHandler(movie);
                })
              }
              className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-file-plus"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M12 11l0 6" />
                <path d="M9 14l6 0" />
              </svg>
              Add to Wacth List
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
