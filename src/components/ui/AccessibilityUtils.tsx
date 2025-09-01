import { useEffect, useState } from 'react';

// Focus trap for modals and dialogs
export const useFocusTrap = (isActive: boolean) => {
  useEffect(() => {
    if (!isActive) return;

    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = document.querySelector('[role="dialog"], [role="alertdialog"]');
    
    if (!modal) return;

    const firstFocusableElement = modal.querySelector(focusableElements) as HTMLElement;
    const focusableContent = modal.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
      
      if (e.key === 'Escape') {
        // Close modal logic would go here
        const closeButton = modal.querySelector('[aria-label*="Close"], [aria-label*="close"]') as HTMLElement;
        closeButton?.click();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    firstFocusableElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive]);
};

// Announce screen reader messages
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.setAttribute('class', 'sr-only');
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Skip to content link
export const SkipToContent = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-4 py-2 rounded-lg z-50 transition-all duration-200"
    onClick={(e) => {
      e.preventDefault();
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView();
      }
    }}
  >
    Skip to main content
  </a>
);

// Accessible form validation messages
interface ValidationMessageProps {
  message?: string;
  type?: 'error' | 'success' | 'warning';
  fieldId: string;
}

export const ValidationMessage = ({ message, type = 'error', fieldId }: ValidationMessageProps) => {
  if (!message) return null;

  const colors = {
    error: 'text-red-600 bg-red-50 border-red-200',
    success: 'text-green-600 bg-green-50 border-green-200',
    warning: 'text-yellow-600 bg-yellow-50 border-yellow-200'
  };

  return (
    <div
      id={`${fieldId}-error`}
      role="alert"
      aria-live="polite"
      className={`mt-2 p-3 rounded-lg border text-sm font-medium animate-fade-in ${colors[type]}`}
    >
      {message}
    </div>
  );
};

// High contrast mode detector
export const useHighContrastMode = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const checkHighContrast = () => {
      if (window.matchMedia) {
        const highContrastMediaQuery = window.matchMedia('(prefers-contrast: high)');
        setIsHighContrast(highContrastMediaQuery.matches);
        
        const handleChange = (e: MediaQueryListEvent) => {
          setIsHighContrast(e.matches);
        };
        
        highContrastMediaQuery.addEventListener('change', handleChange);
        return () => highContrastMediaQuery.removeEventListener('change', handleChange);
      }
    };

    checkHighContrast();
  }, []);

  return isHighContrast;
};

// Reduced motion preference detector
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (window.matchMedia) {
      const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(motionMediaQuery.matches);
      
      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };
      
      motionMediaQuery.addEventListener('change', handleChange);
      return () => motionMediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  return prefersReducedMotion;
};

// Accessible button with proper ARIA attributes
interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  loadingText?: string;
  'aria-describedby'?: string;
}

export const AccessibleButton = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  loadingText = 'Loading...',
  disabled,
  'aria-describedby': ariaDescribedBy,
  ...props
}: AccessibleButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      aria-describedby={ariaDescribedBy}
      aria-busy={loading}
      className={`
        focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200
        ${props.className || ''}
      `}
    >
      <span className={loading ? 'sr-only' : ''}>
        {children}
      </span>
      {loading && (
        <span aria-live="polite">
          {loadingText}
        </span>
      )}
    </button>
  );
};

// Color contrast checker utility
export const checkColorContrast = (foreground: string, background: string) => {
  // This would typically use a color contrast calculation library
  // For now, returning a placeholder
  return {
    ratio: 4.5,
    isAccessible: true,
    level: 'AA' as 'AA' | 'AAA'
  };
};