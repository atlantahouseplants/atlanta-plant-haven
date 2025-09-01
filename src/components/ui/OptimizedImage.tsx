import { useState, useRef, useEffect } from 'react';
import { LoadingSkeleton } from './LoadingSpinner';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
  quality?: 'low' | 'medium' | 'high';
  onLoad?: () => void;
  onError?: () => void;
  role?: string;
  'aria-label'?: string;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  placeholder,
  quality = 'medium',
  onLoad,
  onError,
  role,
  'aria-label': ariaLabel,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(!loading || loading === 'eager');
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'eager' || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [loading, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setIsError(true);
    onError?.();
  };

  const qualityClasses = {
    low: 'image-rendering: optimizeSpeed',
    medium: 'image-rendering: auto',
    high: 'image-rendering: optimizeQuality'
  };

  return (
    <div 
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      style={{ width, height }}
      {...props}
    >
      {/* Loading skeleton */}
      {!isLoaded && !isError && (
        <LoadingSkeleton 
          lines={1} 
          height="h-full" 
          width="w-full"
          className="absolute inset-0"
        />
      )}

      {/* Actual image */}
      {isInView && !isError && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={loading}
          width={width}
          height={height}
          role={role}
          aria-label={ariaLabel}
          className={cn(
            'transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
            'max-w-full h-auto object-cover',
            className
          )}
          style={{
            imageRendering: qualityClasses[quality] as any
          }}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}

      {/* Error fallback */}
      {isError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
          <div className="text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Image unavailable</div>
          </div>
        </div>
      )}

      {/* Placeholder blur effect */}
      {placeholder && !isLoaded && (
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{ backgroundImage: `url(${placeholder})` }}
        />
      )}
    </div>
  );
};

// Hero Image Component with progressive loading
interface HeroImageProps extends OptimizedImageProps {
  sizes?: string;
}

const HeroImage = ({ sizes = '100vw', ...props }: HeroImageProps) => (
  <OptimizedImage
    loading="eager"
    quality="high"
    className="w-full h-96 md:h-[500px] object-cover hover:scale-[1.02] transition-transform duration-700"
    role="img"
    {...props}
  />
);

// Card Image Component
interface CardImageProps extends OptimizedImageProps {
  aspectRatio?: 'square' | 'video' | 'wide';
}

const CardImage = ({ aspectRatio = 'video', ...props }: CardImageProps) => {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[16/10]'
  };

  return (
    <div className={cn('overflow-hidden', aspectClasses[aspectRatio])}>
      <OptimizedImage
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        quality="medium"
        {...props}
      />
    </div>
  );
};

export { OptimizedImage, HeroImage, CardImage };