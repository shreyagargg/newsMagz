import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-primary">
          GRAMSABHA
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <p className="cursor-pointer">Newsletters</p>
          <p className="cursor-pointer">Bookmarks</p>

          <button className="px-4 py-2 border rounded">
            Login
          </button>

          <button className="px-4 py-2 bg-primary text-white rounded">
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

            <button className="border rounded py-2">
              Login
            </button>

            <button className="bg-primary text-white rounded py-2">
              Subscribe
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;