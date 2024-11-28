import React from "react";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-slate-200 rounded-3xl xl:rounded-full p-4 shadow-md items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap  transition-all ease-in-out duration-300">
        <Link
          to="/posts"
          className="bg-slate-500 text-white rounded-full px-4 py-2 transition-all ease-in-out duration-300"
        >
          All Posts
        </Link>
        <Link
          to="/posts?category=development"
          className="hover:bg-slate-500 hover:text-white rounded-full px-4 py-2 transition-all ease-in-out duration-300"
        >
          Development
        </Link>
        <Link
          to="/posts?category=ai"
          className="hover:bg-slate-500 hover:text-white rounded-full px-4 py-2 transition-all ease-in-out duration-300"
        >
          Artificial Intelligence
        </Link>
        <Link
          to="/posts?category=databases"
          className="hover:bg-slate-500 hover:text-white rounded-full px-4 py-2 transition-all ease-in-out duration-300"
        >
          Databases
        </Link>
        <Link
          to="/posts?category=seo"
          className="hover:bg-slate-500 hover:text-white rounded-full px-4 py-2 transition-all ease-in-out duration-300"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?category=web-marketing"
          className="hover:bg-slate-500 hover:text-white rounded-full px-4 py-2 transition-all ease-in-out duration-300"
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-thin">|</span>
      {/* search */}
      <div className="bg-slate-300 p-2 rounded-full flex items-center gap-2">
        <IoMdSearch size={32} className="text-slate-600" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default MainCategories;
