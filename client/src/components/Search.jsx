import { useRef } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Search = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchRef = useRef();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const query = e.target.value;
      searchRef.current.value = "";
      if (location.pathname === "/posts") {
        setSearchParams({ ...Object.fromEntries(searchParams), search: query });
      } else {
        navigate(`/posts?search=${query}`);
      }
    }
  };

  return (
    <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2 dark:bg-slate-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke={theme === "light" ? "gray" : "black"}
      >
        <circle cx="10.5" cy="10.5" r="7.5" />
        <line x1="16.5" y1="16.5" x2="22" y2="22" />
      </svg>
      <input
        className="bg-transparent dark:text-gray-600 focus:outline-none"
        type="text"
        placeholder="search a post..."
        onKeyDown={handleKeyPress}
        ref={searchRef}
      />
    </div>
  );
};

export default Search;
