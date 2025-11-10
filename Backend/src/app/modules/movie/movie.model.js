import mongoose, { Schema, Document, Types } from "mongoose";

// -----------------------------
// Person (Actor, Director, etc.)
// -----------------------------
const PersonSchema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true, index: true },
  bio: String,
  photo: String, // URL or path to photo
  dob: Date,
  externalIds: {
    imdb: String,
    tmdb: String,
    instagram: String,
    twitter: String,
  },
}, { timestamps: true });

export const Person = mongoose.model("Person", PersonSchema);

// -----------------------------
// Genre / Category
// -----------------------------
const GenreSchema = new Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, unique: true, index: true },
}, { timestamps: true });

export const Genre = mongoose.model("Genre", GenreSchema);

// -----------------------------
// Media File (Download / Stream Link)
// -----------------------------
const MediaFileSchema = new Schema({
  quality: { type: String, enum: ["480p", "720p", "1080p", "2160p"], required: true },
  format: { type: String, default: "mp4" },
  type: { type: String, enum: ["download", "stream"], default: "download" },
  url: { type: String, required: true },
  filesize: Number, 
  host: String,
  subtitles: [
    {
      lang: String,
      url: String,
    },
  ],
  drm: {
    enabled: { type: Boolean, default: false },
    provider: String,
  },
  regionRestrictions: [String],
  status: { type: String, enum: ["active", "removed"], default: "active" },
}, { timestamps: true });

// -----------------------------
// Part / Episode Schema
// -----------------------------
const PartSchema = new Schema({
  movie: { type: Schema.Types.ObjectId, ref: "Movie", required: true },
  title: { type: String, required: true },
  partNumber: { type: Number, default: 1 },
  season: { type: Number },
  description: String,
  runtimeMinutes: Number,
  releaseDate: Date,
  sortOrder: { type: Number, default: 0 },
  mediaFiles: [MediaFileSchema],
}, { timestamps: true });

export const Part = mongoose.model("Part", PartSchema);

// -----------------------------
// Credit (Movie ↔ Person Relation)
// -----------------------------
const CreditSchema = new Schema({
  movie: { type: Schema.Types.ObjectId, ref: "Movie", required: true },
  person: { type: Schema.Types.ObjectId, ref: "Person", required: true },
  roleType: {
    type: String,
    enum: ["actor", "director", "writer", "producer", "composer", "editor"],
    required: true,
  },
  characterName: String,
  billingOrder: Number,
}, { timestamps: true });

export const Credit = mongoose.model("Credit", CreditSchema);

// -----------------------------
// Review Schema
// -----------------------------
const ReviewSchema = new Schema({
  movie: { type: Schema.Types.ObjectId, ref: "Movie", required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  rating: { type: Number, min: 0, max: 10 },
  title: String,
  body: String,
  isApproved: { type: Boolean, default: true },
}, { timestamps: true });

export const Review = mongoose.model("Review", ReviewSchema);

// -----------------------------
// Movie Schema
// -----------------------------
const MovieSchema = new Schema({
  title: { type: String, required: true },
  originalTitle: String,
  slug: { type: String, unique: true, index: true },
  synopsis: String,
  synopsisLong: String,
  type: { type: String, enum: ["movie", "series", "short"], default: "movie" },
  releaseDate: Date,
  runtimeMinutes: Number,

  // Media and visual assets
  poster: String,  // main poster URL
  banner: String,  // banner URL
  trailerUrl: String,

  // Ratings & stats
  ratingAvg: { type: Number, default: 0 },
  ratingCount: { type: Number, default: 0 },
  popularity: { type: Number, default: 0 },

  // Associations
  genres: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
  cast: [{ type: Schema.Types.ObjectId, ref: "Person" }],
  crew: [{ type: Schema.Types.ObjectId, ref: "Person" }],

  // For searching/filtering
  languages: [String],
  subtitleLanguages: [String],
  countries: [String],
  tags: [String],

  // Metadata
  externalIds: {
    imdb: String,
    tmdb: String,
    tvdb: String,
  },
  metadata: Schema.Types.Mixed, // flexible field (certifications, budget, boxOffice, etc.)

  // Relationships
  parts: [{ type: Schema.Types.ObjectId, ref: "Part" }],

  // Moderation
  status: { type: String, enum: ["draft", "published", "archived"], default: "draft" },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  updatedBy: { type: Schema.Types.ObjectId, ref: "User" },
  publishedAt: Date,
}, { timestamps: true });

// Full text search index
MovieSchema.index({
  title: "text",
  synopsis: "text",
  tags: "text",
});

// Pre hook for ratingAvg calculation
MovieSchema.statics.recalculateRating = async function (movieId) {
  const reviews = await Review.find({ movie: movieId, isApproved: true });
  if (reviews.length > 0) {
    const avg = reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length;
    await this.findByIdAndUpdate(movieId, {
      ratingAvg: avg,
      ratingCount: reviews.length,
    });
  }
};

export const Movie = mongoose.model("Movie", MovieSchema);
