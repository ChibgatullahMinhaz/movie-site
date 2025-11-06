import { motion } from 'framer-motion';
import Badge from '../Badge/Badge';

import useNavigateHandler from '../../Hooks/useNavigateHandler';

interface MovieCardProps {
  title: string;
  type: 'movie' | 'tv' | 'featured';
  img: string;
  year: number;
  id: number;
}

export function MovieCard({ title, type, img, year, id }: MovieCardProps) {
  const navigateTo = useNavigateHandler()
  //* /dashboard/${title}/${year}/${type}/${id}
  return (
    <motion.div
      onClick={() => navigateTo(`/movie/details/${title}/${year}/${type}/${id}`)}
      whileHover={{ scale: 1.05 }}
      className="relative overflow-hidden cursor-pointer"
    >
      {/* Movie Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-[161px] object-cover transition duration-300 group-hover:opacity-90"
      />

      {/* Badge */}
      <div className="absolute top-3 left-3 z-10">
        <Badge kind={type} label={type === 'featured' ? 'Featured' : type.toUpperCase()} size="sm" />
      </div>

      {/* Bottom Overlay */}
      <div className=" w-full p-1">
        <h3 className=" text-sm sm:text-base truncate">{title}</h3>
        <span className=" text-xs sm:text-sm">{year}</span>
      </div>
    </motion.div>
  );
}
