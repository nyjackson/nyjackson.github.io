// ============================================================
// hooks/useTheme.ts
// Dark mode toggle — persists preference to localStorage.
//
// Usage in Nav.tsx:
//   const { theme, toggleTheme } = useTheme();
//   <button onClick={toggleTheme}>
//     {theme === 'dark' ? 'Light' : 'Dark'}
//   </button>
// ============================================================

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'nj-portfolio-theme';

/**
 * Returns the user's preferred theme in this priority order:
 * 1. Previously saved preference in localStorage
 * 2. OS-level preference (prefers-color-scheme)
 * 3. 'dark' as the default fallback
 */
function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';

  const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (saved === 'light' || saved === 'dark') return saved;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Apply theme to <html> whenever it changes
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  // Sync with OS preference changes (e.g. user switches system theme
  // while the tab is open) — only if the user hasn't set a manual preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem(STORAGE_KEY);
      // Only follow OS if user hasn't explicitly chosen
      if (!saved) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}