
import React from "react";
import { Star, Clock, Calendar, Download } from "lucide-react";

interface MovieInfo {
    title: string;
    year: number;
    genres: string[];
    runtime: string;
    language: string;
    imdb: number;
    poster: string;
    banner: string;
    synopsis: string;
}

const movie: MovieInfo = {
    title: "Inception",
    year: 2010,
    genres: ["Action", "Sci-Fi", "Thriller"],
    runtime: "2h 28m",
    language: "English",
    imdb: 8.8,
    poster:
        "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    banner:
        "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    synopsis:
        "A skilled thief is given a chance at redemption if he can successfully perform an impossible task — planting an idea into someone’s subconscious.",
};

const downloadLinks = [
    { quality: "480p", size: "500MB", url: "#" },
    { quality: "720p", size: "1GB", url: "#" },
    { quality: "1080p", size: "2GB", url: "#" },
];

export default function MovieDetails() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Banner */}
            <div
                className="relative h-72 md:h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${movie.banner})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
                <div className="absolute bottom-6 left-6">
                    <h1 className="text-3xl md:text-5xl font-bold">{movie.title}</h1>
                    <p className="text-gray-300">{movie.year}</p>
                </div>
            </div>

            {/* Movie Info */}
            <div className="max-w-5xl mx-auto px-2 py-8 flex flex-col md:flex-row gap-8">
                <img
                    src={movie.banner}
                    alt={movie.title}
                    className="w-full md:w-1/3 rounded-2xl shadow-lg"
                />
                <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-4 text-gray-300">
                        <span className="flex items-center gap-1">
                            <Calendar size={16} /> {movie.year}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock size={16} /> {movie.runtime}
                        </span>
                        <span className="flex items-center gap-1">
                            <Star size={16} className="text-yellow-400" /> {movie.imdb}
                        </span>
                        <span>{movie.language}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {movie.genres.map((g) => (
                            <span
                                key={g}
                                className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                            >
                                {g}
                            </span>
                        ))}
                    </div>

                    <p className="text-gray-300">{movie.synopsis}</p>

                    {/* Download Links */}
                    <div>
                        <h2 className="text-xl font-semibold mt-6 mb-3">Download Links</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {downloadLinks.map((d) => (
                                <a
                                    key={d.quality}
                                    href={d.url}
                                    className="bg-blue-600 hover:bg-blue-700 transition p-3 rounded-xl flex items-center justify-between"
                                >
                                    <div>
                                        <p className="font-semibold">{d.quality}</p>
                                        <p className="text-sm text-gray-200">{d.size}</p>
                                    </div>
                                    <Download size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Movies */}
            <div className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold mb-4">Related Movies</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-transform"
                        >
                            <img
                                src="https://image.tmdb.org/t/p/w300//2CAL2433ZeIihfX1Hb2139CX0pW.jpg"
                                alt="related"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-2">
                                <p className="text-sm font-semibold">Movie {i + 1}</p>
                                <p className="text-xs text-gray-400">2021</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
