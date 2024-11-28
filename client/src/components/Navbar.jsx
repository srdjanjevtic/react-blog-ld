import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image
          src="https://ik.imagekit.io/jsdogs/public/logo.png"
          w="32"
          alt="logo"
        />
        <span>JSDogs Blog</span>
      </Link>
      {/* mobile menu */}
      <div className="md:hidden">
        {/* mobile menu button */}
        <div className="cursor-pointer">
          {open ? (
            <IoMdClose size={30} onClick={() => setOpen((prev) => !prev)} />
          ) : (
            <IoMdMenu size={30} onClick={() => setOpen((prev) => !prev)} />
          )}
        </div>
        {/* mobile link list */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 z-50 bg-red-500 gap-8 text-lg font-medium transition-all ease-in-out duration-300 bg-inherit ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/posts">Blog</Link>
          <Link to="/:slug">Post</Link>
          <Link to="/write">Write</Link>
          <SignedOut>
            <Link to="/login">
              <button className="py-1 px-3 rounded-3xl bg-sky-500 text-white">
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
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/posts?sort=trending">Trending</Link>
        <Link to="/posts?sort=popular">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-1 px-3 rounded-3xl bg-sky-500 text-white">
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
