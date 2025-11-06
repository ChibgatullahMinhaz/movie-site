import React, { useState, useMemo } from 'react'
import { ArrowBigDownDash, Circle, Search } from 'lucide-react'
import { motion } from 'framer-motion'
import Badge, { MovieCard } from '../Badge/Badge'
import { popularMovies } from '../../Data/Data'
import { Link } from 'react-router'


export default function Sidebar() {
  const [search, setSearch] = useState('')


  const categories = [
    'Action',
    'Adventure',
    'Comedy',
    'Drama',
    'Horror',
    'Sci-Fi',
    'Romance',
    'Thriller',
    'Animation',
    'Documentary',
  ]

  // Filter by search term
  const filteredMovies = useMemo(() => {
    if (!search.trim()) return popularMovies
    return popularMovies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  return (
    <div className="w-full min-h-screen sidebar  dark:text-white border-l border-t border-[#272829]">
      {/* Search Bar */}
      <div className="sticky top-0 z-20  dark:bg-slate-800 shadow-md p-4 flex items-center gap-3">
        <Search className="w-5 h-5 text-slate-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for movies, TV shows..."
          className="w-full bg-transparent outline-none placeholder:text-slate-400 text-slate-800 dark:text-white"
        />
      </div>

      {/* Popular Movies */}
      <section className="p-4">
        <h2 className="text-2xl font-semibold mb-3">Popular Movies</h2>
        {filteredMovies.length > 0 ? (
          <div className="my-3">
            {filteredMovies.map((movie, idx) => (
              <MovieCard key={idx} title={movie.title} year={movie.year} type={movie.type as any} img={movie.img} />
            ))}
          </div>
        ) : (
          <p className="text-slate-500 italic">No movies found for your search.</p>
        )}
      </section>

      {/* Categories */}
      <section className="p-6 border-t border-slate-300/40 mt-6">
        <div className='flex items-center justify-between cursor-pointer'>
          <h2 className="text-2xl mb-3 text-[#8a8b8c]">Categories</h2>
          <ArrowBigDownDash size={20} strokeWidth={0.5} />

        </div>
        <div className="flex flex-col divide-y divide-[#272829]">
          {categories.map((cat, index) => (
            <motion.div
              key={cat}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-between py-3"
            >
              <Link
                to={'/skdfjl'}
                className="flex items-center gap-x-2 text-slate-500 hover:text-blue-500"
              >
                {/* Circle prefix */}
                <Circle size={10} />
                <span className="font-medium">{cat}</span>
              </Link>

              {/* Right side number */}
              <span className="text-sm text-slate-500">{index + 1}</span>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  )
}

