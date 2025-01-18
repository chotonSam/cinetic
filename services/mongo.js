import mongoose from "mongoose";

export const dbConnect = async () => {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is not defined in the environment variables.");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 60000, // Timeout increased to 60 seconds
      connectTimeoutMS: 60000,
      socketTimeoutMS: 60000,
      bufferCommands: false,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    console.log("Retrying connection in 5 seconds...");
    setTimeout(dbConnect, 5000); // Retry after 5 seconds
  }
};

// Use dbConnect function in the entry point
dbConnect();
