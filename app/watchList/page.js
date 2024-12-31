"use client";

import { deleteWatch, fetchWatchList } from "@/actions";
import LoadingComponent from "@/components/LoadingComponent";
import Empty from "@/components/watchList/Empty";
import WatchCard from "@/components/watchList/WatchCard";
import { useAuth } from "@/hooks/useAuth";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function WatchPage() {
  const { auth } = useAuth();
  const [watchList, setWatchList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      // Redirect to login if the user is not authenticated
      router.push("/login");
    } else {
      // Fetch data if authenticated
      const fetchData = async () => {
        try {
          const movies = await fetchWatchList(auth.id);
          setWatchList(movies);
        } catch (error) {
          console.error("Error fetching watchlist:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [auth, router]);

  async function onRemove(watchId) {
    try {
      // Delete the movie
      await deleteWatch(watchId);

      // Update the state to reflect the removed movie
      setWatchList((prevList) =>
        prevList.filter((movie) => movie.id !== watchId)
      );
    } catch (error) {
      console.error("Error removing movie:", error);
    }
  }

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="container mx-auto pt-24 pb-8">
      {watchList.length > 0 ? (
        <>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white">Watch Later</h1>
            <p className="text-light/70 mt-2">
              Movies you&apos;ve saved to watch in the future
            </p>
          </header>

          <div
            id="watchLaterList"
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {watchList.map((movie) => (
              <WatchCard key={movie.id} movie={movie} onRemove={onRemove} />
            ))}
          </div>
        </>
      ) : (
        <Empty />
      )}
    </div>
  );
}
