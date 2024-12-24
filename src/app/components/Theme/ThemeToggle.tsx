'use client';
import { Sun, Moon } from 'lucide-react';

import { useEffect, useState } from 'react';

  const ThemeToggle = () => {
  const [theme, setTheme] = useState<string|null>(null);

  useEffect(() => {
    // Load theme from localStorage or set default
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };



  if (theme === null) {
    // Prevent rendering until the theme is loaded
    return null;
  }

  

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-2xl bg-[#ffa928] dark:bg-gray-700 transition-colors"
    >
      {theme === 'light' ? <Sun size={15} className="text-black" /> : <Moon size={15} className="text-white" />}
    </button>
  );
};


export default ThemeToggle

