import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* logo */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <img src="/logo.png" alt="logo" className="w-8 h-8" />
        <span>JSDogs Blog</span>
      </div>
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
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
          <a href="#">
            <button className="py-1 px-3 rounded-3xl bg-sky-500 text-white">
              Login 🖐️
            </button>
          </a>
        </div>
      </div>
      {/* desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Pricing</a>
        <a href="#">
          <button className="py-1 px-3 rounded-3xl bg-sky-500 text-white">
            Login 🖐️
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
