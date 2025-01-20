export async function fetchYouTubeTrailer(movieName) {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const maxResults = 1; // Only get the first result (most relevant)
  const searchQuery = `${movieName} trailer`;

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      searchQuery
    )}&type=video&videoDefinition=high&maxResults=${maxResults}&key=${apiKey}`
  );

  const data = await response.json();

  if (data.items && data.items.length > 0) {
    const videoId = data.items[0].id.videoId;
    return `https://www.youtube.com/embed/${videoId}`;
  } else {
    return null; // No trailer found
  }
}
