// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';


// const responsive = {
//   desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
//   tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
//   mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
// };

// export default function Banner() {
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-semibold mb-4">Trending Movies & Shows</h2>

//       <Carousel
//         
//       >
//         {movies.map((movie, idx) => (
//           <div key={idx} className="relative bg-white dark:bg-slate-800 rounded-xl shadow-md p-2">
//             <img
//               src={movie.img}
//               alt={movie.title}
//               className="w-full h-32 object-cover rounded-lg "
//             />
//             <div className=" absolute to-5% flex justify-between items-center mb-1">
//               <h3 className="">{movie.title}</h3>
//               <span className="text-yellow-400 font-bold">{movie.rating}</span>
//             </div>
//             {/* <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
//               <span>{movie.year}</span>
//               <span>{movie.type}</span>
//             </div> */}
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// }


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


interface Movie {
  title: string;
  description: string;
  img: string;
  rating: number;
  year: number;
  type: 'Movie' | 'TV';
}

const movies: Movie[] = [
  {
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology.',
    img: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
    rating: 8.8,
    year: 2010,
    type: 'Movie',
  },
  {
    title: 'The Dark Knight',
    description: 'Batman faces the Joker in a battle for Gotham City.',
    img: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    rating: 9.0,
    year: 2008,
    type: 'Movie',
  },
  {
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher turns to making meth.',
    img: 'https://image.tmdb.org/t/p/w500/eSzpy96DwBujGFj0xMbXBcGcfxX.jpg',
    rating: 9.5,
    year: 2008,
    type: 'TV',
  },
  {
    title: 'Dune',
    description: 'Paul Atreides leads his family in a battle for Arrakis.',
    img: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
    rating: 8.2,
    year: 2021,
    type: 'Movie',
  },
  {
    title: 'Loki',
    description: 'The God of Mischief steps out of his brother’s shadow.',
    img: 'https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg',
    rating: 8.3,
    year: 2021,
    type: 'TV',
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

export default function Banner() {
  return (
    <div className="= ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold border-l-4 border-blue-400 px-1.5">Trending Movies & Shows</h2>
      </div>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        showDots={true}
        arrows={false}
        containerClass="carousel-container"
        itemClass="py-4"
      >
        {movies.map((movie, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden  group cursor-pointer"
          >
            {/* Landscape Image */}
           
             <img
              src={movie.img}
              alt={movie.title}
              className="w-full h-[180px] object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Title + Year (bottom left) */}
            <div className="absolute bottom-3 left-3 text-white">
              <h3 className="text-lg font-semibold leading-tight drop-shadow-md">
                {movie.title}
              </h3>
              <p className="text-sm ">{movie.year}</p>
            </div>

            {/* Badge (bottom right) */}
            <div className="absolute bottom-3 right-3">
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${movie.type === 'Movie'
                    ? 'bg-rose-600 text-white'
                    : 'bg-emerald-500 text-white'
                  }`}
              >
                {movie.type}
              </span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
