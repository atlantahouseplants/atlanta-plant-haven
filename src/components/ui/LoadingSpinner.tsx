import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'green' | 'blue' | 'gray' | 'white';
  className?: string;
}

const LoadingSpinner = ({ 
  size = 'md', 
  color = 'green', 
  className, 
  ...props 
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-2',
    lg: 'h-8 w-8 border-3',
    xl: 'h-12 w-12 border-4'
  };

  const colorClasses = {
    green: 'border-green-600 border-t-transparent',
    blue: 'border-blue-600 border-t-transparent', 
    gray: 'border-gray-600 border-t-transparent',
    white: 'border-white border-t-transparent'
  };

  return (
    <div
      className={cn(
        'animate-spin rounded-full',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      {...props}
    />
  );
};

// Loading Skeleton Component
interface LoadingSkeletonProps extends HTMLAttributes<HTMLDivElement> {
  lines?: number;
  height?: string;
  width?: string;
  className?: string;
}

const LoadingSkeleton = ({ 
  lines = 1, 
  height = 'h-4', 
  width = 'w-full',
  className, 
  ...props 
}: LoadingSkeletonProps) => {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'animate-pulse bg-gray-200 rounded-lg',
            height,
            i === lines - 1 && lines > 1 ? 'w-3/4' : width
          )}
        />
      ))}
    </div>
  );
};

// Loading Dots Component
interface LoadingDotsProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'green' | 'blue' | 'gray';
}

const LoadingDots = ({ size = 'md', color = 'green' }: LoadingDotsProps) => {
  const sizeClasses = {
    sm: 'h-1 w-1',
    md: 'h-2 w-2', 
    lg: 'h-3 w-3'
  };

  const colorClasses = {
    green: 'bg-green-600',
    blue: 'bg-blue-600',
    gray: 'bg-gray-600'
  };

  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            'rounded-full animate-bounce',
            sizeClasses[size],
            colorClasses[color]
          )}
          style={{ 
            animationDelay: `${i * 0.1}s`,
            animationDuration: '0.6s'
          }}
        />
      ))}
    </div>
  );
};

// Success Checkmark Animation
const SuccessCheck = ({ className }: { className?: string }) => (
  <div className={cn("animate-bounce-in", className)}>
    <div className="rounded-full bg-green-500 p-2">
      <svg 
        className="h-6 w-6 text-white animate-scale-in" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        style={{ animationDelay: '0.2s' }}
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={3} 
          d="M5 13l4 4L19 7" 
        />
      </svg>
    </div>
  </div>
);

export { LoadingSpinner, LoadingSkeleton, LoadingDots, SuccessCheck };