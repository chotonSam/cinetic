"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (query) {
      // Navigate to /search route with the query as a query parameter
      router.push(`/search?query=${query}`);
    } else {
      // Keep the user on the current page if query is empty
      router.push("/");
    }
  }, [query, router]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="relative">
      <input
        value={query}
        onChange={handleChange}
        type="text"
        id="searchInput"
        placeholder="Search movies..."
        className="bg-black bg-opacity-50 text-white px-4 py-1.5 md:py-2 rounded border border-gray-600 focus:outline-none focus:border-white w-full"
      />
    </div>
  );
}
