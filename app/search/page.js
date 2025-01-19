"use client";

import SearchMovieCard from "@/components/search/SearchMovieCard";
import { fetchMovies } from "@/utils/fetchMovies";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [searchData, setSearchData] = useState([]);

  console.log(query);

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        const data = await fetchMovies(`/api/movies/search?name=${query}`);
        setSearchData(data.results);
      };
      fetchData();
    } else {
      setSearchData([]);
    }
  }, [query]);

  console.log(searchData);

  return (
    <main className="container mx-auto px-4 pt-32 pb-8">
      {/* <!-- Search Stats --> */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Search Results for &quot;{query}&quot;
        </h1>
        <p className="text-gray-400">Found {searchData.length} results</p>
      </div>

      {/* <!-- Filters and Sort Section --> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* <!-- Movie Card 1 --> */}
        {searchData.map((movie) => (
          <SearchMovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </main>
  );
}
