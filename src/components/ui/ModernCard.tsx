import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { COMPONENT_STYLES } from '@/styles/design-system';

interface ModernCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'interactive' | 'featured' | 'bordered';
  hover?: boolean;
  loading?: boolean;
  className?: string;
}

const ModernCard = ({ 
  children, 
  variant = 'default', 
  hover = false, 
  loading = false,
  className,
  ...props 
}: ModernCardProps) => {
  const baseClasses = COMPONENT_STYLES.card.base;
  
  const variantClasses = {
    default: '',
    interactive: hover ? COMPONENT_STYLES.card.interactive : '',
    featured: COMPONENT_STYLES.card.featured,
    bordered: 'border-2 border-gray-200/80 hover:border-gray-300/80'
  };

  const loadingOverlay = loading && (
    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-xl">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-green-600 border-t-transparent" />
    </div>
  );

  return (
    <div 
      className={cn(
        baseClasses,
        variantClasses[variant],
        hover && 'group',
        loading && 'relative',
        'animate-fade-in',
        className
      )}
      {...props}
    >
      {children}
      {loadingOverlay}
    </div>
  );
};

// Card Header Component
interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

const CardHeader = ({ children, className }: CardHeaderProps) => (
  <div className={cn("p-6 pb-3", className)}>
    {children}
  </div>
);

// Card Content Component  
interface CardContentProps {
  children: ReactNode;
  className?: string;
  padding?: boolean;
}

const CardContent = ({ children, className, padding = true }: CardContentProps) => (
  <div className={cn(padding ? "p-6 pt-3" : "", className)}>
    {children}
  </div>
);

// Card Footer Component
interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

const CardFooter = ({ children, className }: CardFooterProps) => (
  <div className={cn("p-6 pt-3 border-t border-gray-100", className)}>
    {children}
  </div>
);

// Card Image Component
interface CardImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

const CardImage = ({ src, alt, className, loading = 'lazy', ...props }: CardImageProps) => (
  <div className="relative overflow-hidden">
    <img 
      src={src} 
      alt={alt}
      loading={loading}
      className={cn(
        "w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105",
        className
      )}
      {...props}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

// Card Title Component
interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const CardTitle = ({ children, className, as: Component = 'h3' }: CardTitleProps) => (
  <Component className={cn(
    "text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200",
    className
  )}>
    {children}
  </Component>
);

// Card Description Component
interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

const CardDescription = ({ children, className }: CardDescriptionProps) => (
  <p className={cn("text-gray-600 leading-relaxed", className)}>
    {children}
  </p>
);

export {
  ModernCard,
  CardHeader,
  CardContent,
  CardFooter,
  CardImage,
  CardTitle,
  CardDescription
};