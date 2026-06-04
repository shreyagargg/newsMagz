  import { useState } from "react";
  const items = [
    "Current Issue",
    "The Nation",
    "Politics",
    "Columns",
    "Archives",
  ];

function Navbar() {
    const [toast, setToast] = useState("");

    const showToast = (message) => {
        setToast(message);

        setTimeout(() => {
            setToast("");
        }, 2000);
    }

  return (
    <>
      <nav className="border-t border-gray-500 max-w-7xl mx-auto px-6">
        <ul className="flex items-center py-1 text-lg font-semibold">
          {items.map((item, index) => (
            <li key={item} className="flex items-center">
              <a
                href="#"
                className="hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  showToast(`${item} is coming soon! Stay updated for exciting content!`);
                }}
              >
                {item}
              </a>

              {index < items.length - 1 && (
                <span className="mx-3 text-gray-400">|</span>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {toast && <div className="fixed top-5 right-5 bg-neutral-800 text-secondary px-4 py-3 rounded-lg text-base z-[99]">{toast}</div>}
    </>
  );
}

export default Navbar;