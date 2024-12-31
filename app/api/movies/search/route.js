import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        process.env.TMDB_API
      }&query=${encodeURIComponent(name)}`
    );

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
