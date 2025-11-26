import Image from 'next/image'

interface ResponsiveImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
}

/**
 * Componente de imagen responsive optimizado para Next.js
 * 
 * Uso:
 * <ResponsiveImage 
 *   src="/images/gallery/interior-1.jpg"
 *   alt="Interior de Boreal"
 *   width={1200}
 *   height={800}
 *   objectFit="cover"
 * />
 */
export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  objectFit = 'cover',
}: ResponsiveImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-${objectFit}`}
        priority={priority}
        quality={85}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
    </div>
  )
}

