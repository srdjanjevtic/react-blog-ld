import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between bg-white dark:bg-gray-900 transition-colors">
      {/* logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold dark:text-white">
        <Image
          src="/logo.png"
          w="32"
          alt="logo"
        />
        <span>JSDogs Blog</span>
      </Link>
      {/* mobile menu */}
      <div className="md:hidden">
        {/* mobile menu button */}
        <div className="cursor-pointer dark:text-white">
          {open ? (
            <IoMdClose size={30} onClick={() => setOpen((prev) => !prev)} />
          ) : (
            <IoMdMenu size={30} onClick={() => setOpen((prev) => !prev)} />
          )}
        </div>
        {/* mobile link list */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 z-50 gap-8 text-lg font-medium transition-all ease-in-out duration-300 bg-white dark:bg-gray-900 dark:text-white ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/posts">Blog</Link>
          <Link to="/:slug">Post</Link>
          <Link to="/write">Write</Link>
          <ThemeToggle />
          <SignedOut>
            <Link to="/login">
              <button className="py-1 px-3 rounded-3xl bg-sky-500 text-white hover:bg-sky-600 transition-colors">
                Login 🖐️
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      {/* desktop menu */}
      <div className="hidden md:flex items-center gap-4">
        <Link to="/" className="hover:text-sky-500 dark:text-white dark:hover:text-sky-500 transition-colors">Home</Link>
        <Link to="/posts" className="hover:text-sky-500 dark:text-white dark:hover:text-sky-500 transition-colors">Blog</Link>
        <Link to="/write" className="hover:text-sky-500 dark:text-white dark:hover:text-sky-500 transition-colors">Write</Link>
        <ThemeToggle />
        <SignedOut>
          <Link to="/login">
            <button className="py-1 px-3 rounded-3xl bg-sky-500 text-white hover:bg-sky-600 transition-colors">
              Login 🖐️
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
