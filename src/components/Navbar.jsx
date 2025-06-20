import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">Task Manager</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm transition-all hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        {darkMode ? '☀ Light' : '🌙 Dark'}
      </button>
    </nav>
  );
};

export default Navbar;
