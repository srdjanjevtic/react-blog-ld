import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 ease-in-out"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <FaMoon className="w-5 h-5 text-gray-600 hover:text-gray-800 transition-colors" />
      ) : (
        <FaSun className="w-5 h-5 text-yellow-400 hover:text-yellow-500 transition-colors" />
      )}
    </button>
  );
};

export default ThemeToggle;
