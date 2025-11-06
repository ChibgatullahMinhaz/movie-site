import React from "react";
import { Link } from "react-router";

const NotFound: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-9xl font-extrabold text-red-600 animate-pulse">404</h1>
      <p className="text-xl md:text-2xl mt-4 text-gray-300">
        Oops! The movie you’re looking for isn’t here.
      </p>
      <p className="text-md md:text-lg mt-2 text-gray-400">
        Maybe go back to the home page and explore some movies?
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition-all duration-300"
      >
        Go to Home
      </Link>

      {/* Optional: Movie-themed background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80')] 
                        bg-cover bg-center opacity-10 h-full w-full" />
      </div>
    </div>
  );
};

export default NotFound;
