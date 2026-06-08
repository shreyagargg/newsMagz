import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="mx-4 mt-12 bg-primary text-white rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-4">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div>
            <h2 className="text-4xl md:text-5xl font-bold">
              GramSabha India
            </h2>

            <p className="mt-3 text-gray-200 max-w-sm">
              Independent journalism focused on rural India,
              governance, politics, and social issues.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">
                About Us
              </li>
              <li className="hover:underline cursor-pointer">
                Contact Us
              </li>
              <li className="hover:underline cursor-pointer">
                Careers
              </li>
              <li className="hover:underline cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a href="#">
                <FaFacebookF
                  size={24}
                  className="hover:scale-125 transition"
                />
              </a>

              <a href="#">
                <FaXTwitter
                  size={24}
                  className="hover:scale-125 transition"
                />
              </a>

              <a href="#">
                <FaInstagram
                  size={24}
                  className="hover:scale-125 transition"
                />
              </a>

              <a href="#">
                <FaYoutube
                  size={24}
                  className="hover:scale-125 transition"
                />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-white/20 mt-8 pt-6">
          <p className="text-center text-gray-200">
            © 2026 THG Publishing Pvt Ltd. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;