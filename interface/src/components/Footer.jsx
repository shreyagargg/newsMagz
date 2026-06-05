function Footer() {
  return (
    <footer className="mx-4 md:mx-4 lg:mx-4 mt-10 bg-primary text-white rounded-xl">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Logo / Brand */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              GramSabha India
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-200 max-w-sm">
              Independent journalism focused on rural India, governance,
              politics, and social issues.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-xl mb-3">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer hover:underline">
                About Us
              </li>
              <li className="cursor-pointer hover:underline">
                Contact Us
              </li>
              <li className="cursor-pointer hover:underline">
                Careers
              </li>
              <li className="cursor-pointer hover:underline">
                Privacy Policy
              </li>
              <li className="cursor-pointer hover:underline">
                Terms of Service
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-xl mb-3">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a href="#" aria-label="Facebook">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                  className="w-7 h-7 hover:scale-110 transition"
                />
              </a>

              <a href="#" aria-label="Twitter">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  alt="Twitter"
                  className="w-7 h-7 hover:scale-110 transition"
                />
              </a>

              <a href="#" aria-label="Instagram">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                  alt="Instagram"
                  className="w-7 h-7 hover:scale-110 transition"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <p className="text-center text-sm md:text-base text-gray-200">
            © 2026 THG Publishing Pvt Ltd. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;