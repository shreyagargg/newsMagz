import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const categories = [
  "Current Issue", "The Nation", "Politics", "Columns", "Archives", "Jharkhand"
];

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [isAuthor, setIsAuthor] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-4 md:px-6 py-2 max-w-7xl mx-auto border-b md:border-b-0 border-gray-100">
        <h1 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary select-none tracking-tight">
          GRAM SABHA INDIA
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <p
            className="font-['Cormorant_Garamond'] cursor-pointer hover:text-primary text-xl font-medium transition-colors"
            onClick={() => {
              setIsAuthor(!isAuthor);
              navigate(isAuthor ? "/reader" : "/author");
            }}
          >
            {isAuthor ? "Become Reader" : "Become Author"}
          </p>
          <p className="font-['Cormorant_Garamond'] cursor-pointer hover:text-primary text-xl font-medium transition-colors" onClick={() => navigate("/bookmark")}>Bookmarks</p>

          <button
            className="bg-black rounded relative overflow-hidden border border-black px-5 py-2 text-white text-sm font-medium z-10 before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out before:-z-10 hover:text-black hover:before:w-full"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button className="bg-primary rounded relative overflow-hidden border border-primary px-5 py-2 text-white text-sm font-medium z-10 before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out before:-z-10 hover:text-primary hover:before:w-full">
            Subscribe
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-1 text-gray-700 hover:text-primary focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {/* Mobile Drawer Dropdown */}
      {open && (
        <div className="md:hidden border-b border-gray-200 bg-white animate-fadeIn shadow-inner">
          <div className="flex flex-col p-4 gap-4 text-gray-800 font-medium">
            <p className="cursor-pointer hover:text-primary border-b border-gray-50 pb-2" onClick={() => { setOpen(false); navigate("/newsletter"); }}>Become Author</p>
            <p className="cursor-pointer hover:text-primary border-b border-gray-50 pb-2" onClick={() => { setOpen(false); navigate("/newsletter"); }}>Bookmarks</p>

            {/* Embedded Mobile Categories */}
            <div className="pt-2 border-t border-gray-100">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Categories</span>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                {categories.map(cat => (
                  <p key={cat} className="hover:text-primary cursor-pointer py-1" onClick={() => setOpen(false)}>{cat}</p>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-gray-100">
              <button
                className="w-full bg-black border border-black rounded py-2.5 text-white font-medium text-center"
                onClick={() => { setOpen(false); navigate("/login"); }}
              >
                Login
              </button>
              <button className="w-full bg-primary border border-primary rounded py-2.5 text-white font-medium text-center">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;