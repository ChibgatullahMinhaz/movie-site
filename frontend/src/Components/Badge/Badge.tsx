import { Film, Tv, Star, Sparkles, Bolt, Tag } from 'lucide-react'
import { motion } from 'framer-motion'

type BadgeKind =
  | 'movie'
  | 'tv'
  | 'featured'
  | 'new'
  | 'top'
  | 'exclusive'
  | 'beta'
  | 'custom'

type BadgeVariant = 'solid' | 'outline' | 'ghost'
type BadgeSize = 'sm' | 'md' | 'lg'

interface BadgeProps {
  kind?: BadgeKind
  label?: string
  variant?: BadgeVariant
  size?: BadgeSize
  icon?: boolean
  className?: string
  title?: string
}

const colorMap: Record<BadgeKind, { bg: string; text: string; ring?: string }> = {
  movie: { bg: 'bg-rose-600', text: 'text-white' },
  tv: { bg: 'bg-emerald-600', text: 'text-white' },
  featured: { bg: 'bg-yellow-400', text: 'text-black' },
  new: { bg: 'bg-blue-500', text: 'text-white' },
  top: { bg: 'bg-indigo-600', text: 'text-white' },
  exclusive: { bg: 'bg-purple-600', text: 'text-white' },
  beta: { bg: 'bg-gray-700', text: 'text-white' },
  custom: { bg: 'bg-slate-200', text: 'text-black' },
}

const iconFor = (kind?: BadgeKind) => {
  switch (kind) {
    case 'movie':
      return <Film className="w-3 h-3" />
    case 'tv':
      return <Tv className="w-3 h-3" />
    case 'featured':
      return <Star className="w-3 h-3" />
    case 'new':
      return <Sparkles className="w-3 h-3" />
    case 'top':
      return <Bolt className="w-3 h-3" />
    case 'exclusive':
      return <Tag className="w-3 h-3" />
    case 'beta':
      return <Bolt className="w-3 h-3" />
    default:
      return null
  }
}

export default function Badge({
  kind = 'custom',
  label,
  variant = 'solid',
  size = 'md',
  icon = true,
  className = '',
  title,
}: BadgeProps) {
  const colors = colorMap[kind]

  const sizeStyles: Record<BadgeSize, string> = {
    sm: 'text-xs px-2 py-0.5 rounded-full',
    md: 'text-sm px-3 py-1 rounded-full',
    lg: 'text-base px-4 py-1.5 rounded-full',
  }

  const base = `inline-flex items-center gap-2 font-medium leading-none ${sizeStyles[size]} ${className}`

  const variantStyles =
    variant === 'solid'
      ? `${colors.bg} ${colors.text}`
      : variant === 'outline'
        ? `bg-transparent ${colors.text} ring-1 ring-inset ring-gray-300` // outline
        : `bg-transparent ${colors.text}` // ghost

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${base} ${variantStyles} select-none shadow-sm`}
      title={title ?? label}
    >
      {icon && iconFor(kind)}
      <span className="truncate">{label ?? kind.toUpperCase()}</span>
    </motion.span>
  )
}




export function MovieCard({
  title,
  type,
  img,
  year,
}: {
  title: string
  year: number
  type: 'movie' | 'tv' | 'featured'
  img: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-md group my-2.5"
    >
      {/* Movie Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition"
      />

      {/* Optional gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 pointer-events-none"></div>

      {/* Badge (Top Left) */}
      <div className="absolute top-3 left-3">
        <Badge
          kind={type}
          label={type === 'featured' ? 'Featured' : type.toUpperCase()}
          size="sm"
        />
      </div>

      {/* Title + Year (Bottom Left) */}
      <div className="absolute bottom-3 left-3 text-white">
        <h3 className="text-lg font-semibold leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {title}
        </h3>
        <p className="text-sm opacity-90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
          {year}
        </p>
      </div>
    </motion.div>
  )
}
