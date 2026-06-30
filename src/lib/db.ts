import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI inside .env.local");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cached =
  global.mongooseCache ??
  {
    conn: null,
    promise: null,
  };

global.mongooseCache = cached;

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🔄 Connecting to MongoDB...");

    cached.promise = mongoose.connect(MONGODB_URI!, {
      dbName: "tripnest-production",
    });
  }

  try {
    cached.conn = await cached.promise;

    console.log("✅ MongoDB Connected");

    return cached.conn;
  } catch (error) {
    cached.promise = null;

    console.error("❌ MongoDB Connection Error");
    throw error;
  }
}