import mongoose from "mongoose";

const watchlistSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    poster: { type: String, required: true },
    releaseYear: { type: String, required: true },
    movieId: { type: Number, required: true },
    user: { type: String, required: true },
  },
  { timestamps: true }
);

export const watchListModel =
  mongoose.models.watch_lists || mongoose.model("watch_lists", watchlistSchema);
