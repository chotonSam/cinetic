import { fetchMovies } from "@/utils/fetchMovies";
import HeroClient from "./HeroClient"; // Import the client-side component

export default async function Hero() {
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    return null;
  }

  const trendingData = await fetchMovies(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/populer`
  );

  return (
    <div>
      <HeroClient trendingData={trendingData} />
    </div>
  );
}
