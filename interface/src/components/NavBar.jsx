import { useState } from "react";

const items = [
  "Current Issue",
  "The Nation",
  "Politics",
  "Columns",
  "Archives",
  "Jharkhand"
];

function Navbar() {
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  return (
    <>
      {/* Hidden on mobile, shown on desktop/tablet with horizontal wrapping */}
      <nav className="hidden md:block border-t border-b border-gray-300 max-w-7xl mx-auto px-4 md:px-6 my-2">
        <ul className="flex flex-wrap items-center justify-center cursor-pointer lg:justify-start py-2 text-base md:text-lg font-semibold gap-y-2">
          {items.map((item, index) => (
            <li key={item} className="flex items-center">
              <a
                // href="#"
                className="hover:text-primary transition-colors whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault();
                  showToast(`${item} is coming soon! Stay updated for exciting content!`);
                }}
              >
                {item}
              </a>
              {index < items.length - 1 && (
                <span className="mx-2 lg:mx-4 text-gray-300 pointer-events-none">|</span>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {toast && (
        <div className="fixed bottom-5 right-5 md:top-5 md:bottom-auto bg-neutral-800 text-white px-4 py-3 rounded-lg text-sm md:text-base z-[99] shadow-lg max-w-xs md:max-w-md">
          {toast}
        </div>
      )}
    </>
  );
}

export default Navbar;