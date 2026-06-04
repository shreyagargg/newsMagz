import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom"

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <>
      <header className="flex items-center justify-between px-6 pt-2 max-w-7xl mx-auto">
        <h1 className="font-['Cormorant_Garamond'] text-3xl md:text-5xl lg:text-7xl font-bold text-primary">
          GRAM SABHA INDIA
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <p className="font-['Cormorant_Garamond'] cursor-pointer hover:text-primary text-xl" onClick={() => { navigate("/newsletter") }}>Newsletters</p>
          <p className="font-['Cormorant_Garamond'] cursor-pointer hover:text-primary text-xl" onClick={() => { navigate("/newsletter") }}>Bookmarks</p>

          <button className="bg-black rounded relative overflow-hidden border border-black
    px-4 py-2 text-white z-10 before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-white
    before:transition-all before:duration-500 before:ease-in-out before:-z-10 hover:text-black hover:before:w-full" onClick={() => navigate("/login")}>
            Login
          </button>

          <button className="bg-primary rounded relative overflow-hidden border border-primary
    px-4 py-2 text-white z-10 before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-white
    before:transition-all before:duration-500 before:ease-in-out before:-z-10 hover:text-primary hover:before:w-full">
            Subscribe
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {open && (
        <div className="md:hidden border-t">
          <div className="flex flex-col p-4 gap-4">
            <p>Newsletters</p>
            <p>Bookmarks</p>

            <button className="bg-black rounded relative overflow-hidden border border-black
    px-4 py-2 text-white z-10 before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-white
    before:transition-all before:duration-500 before:ease-in-out before:-z-10 hover:text-black hover:before:w-full">
              Login
            </button>

            <button className="bg-primary rounded relative overflow-hidden border border-primary
    px-4 py-2 text-white z-10 before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-white
    before:transition-all before:duration-500 before:ease-in-out before:-z-10 hover:text-primary hover:before:w-full">
              Subscribe
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;