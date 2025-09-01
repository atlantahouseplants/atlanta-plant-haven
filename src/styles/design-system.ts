// Modern Design System Constants
export const DESIGN_TOKENS = {
  // Colors
  colors: {
    primary: {
      50: '#f0fdf4',
      100: '#dcfce7', 
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      900: '#14532d'
    },
    secondary: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8'
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      600: '#4b5563',
      900: '#111827'
    }
  },
  
  // Spacing
  spacing: {
    xs: '0.5rem',    // 8px
    sm: '0.75rem',   // 12px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem'    // 64px
  },
  
  // Border radius
  radius: {
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '20px',
    full: '9999px'
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    glow: '0 0 20px rgb(34 197 94 / 0.3)'
  }
} as const;

// Modern component classes
export const COMPONENT_STYLES = {
  // Cards
  card: {
    base: `bg-white rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md 
           transition-all duration-300 overflow-hidden`,
    interactive: `cursor-pointer transform hover:scale-[1.02] hover:-translate-y-1`,
    featured: `border-2 border-green-500/20 shadow-lg hover:shadow-xl`
  },
  
  // Buttons
  button: {
    primary: `bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 
              text-white font-semibold rounded-xl px-6 py-3 shadow-md hover:shadow-lg 
              transform hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-green-500/50`,
    secondary: `bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 
                hover:text-gray-900 font-semibold rounded-xl px-6 py-3 shadow-sm hover:shadow-md 
                transform hover:scale-105 transition-all duration-200`,
    cta: `bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 
          text-white font-bold rounded-xl px-8 py-4 text-lg shadow-lg hover:shadow-xl 
          transform hover:scale-105 transition-all duration-300 focus:ring-2 focus:ring-blue-500/50`
  },
  
  // Form elements
  form: {
    input: `w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 
            focus:ring-2 focus:ring-green-500/20 transition-all duration-200`,
    select: `w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 
             focus:ring-2 focus:ring-green-500/20 transition-all duration-200 bg-white`,
    textarea: `w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 
               focus:ring-2 focus:ring-green-500/20 transition-all duration-200 min-h-[120px]`
  },
  
  // Loading states
  loading: {
    spinner: `animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent`,
    skeleton: `animate-pulse bg-gray-200 rounded-lg`,
    shimmer: `animate-pulse bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-[length:200%_100%]`
  },
  
  // Animations
  animations: {
    fadeIn: `animate-fade-in`,
    slideUp: `animate-slide-up`,
    bounceIn: `animate-bounce-in`,
    scaleIn: `animate-scale-in`
  }
} as const;

// Responsive breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;