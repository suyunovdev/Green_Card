const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-400 leading-relaxed">
              We provide top-notch services for Green Card applicants with
              expert advice and guidance to improve your chances of success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="font-bold">Email:</span> info@greencard.com
              </li>
              <li>
                <span className="font-bold">Phone:</span> +123 456 7890
              </li>
              <li>
                <span className="font-bold">Address:</span> 1234 Green Street,
                New York, NY
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-gray-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.326v21.349C0 23.404.596 24 1.326 24H12.81v-9.294H9.692v-3.62h3.118V8.413c0-3.1 1.893-4.79 4.657-4.79 1.325 0 2.464.099 2.796.143v3.243l-1.919.001c-1.504 0-1.797.715-1.797 1.763v2.31h3.592l-.468 3.62h-3.124V24h6.128c.729 0 1.325-.596 1.325-1.325V1.326C24 .596 23.404 0 22.675 0z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.865 9.865 0 01-3.127 1.195 4.919 4.919 0 00-8.384 4.482A13.963 13.963 0 011.671 3.149 4.917 4.917 0 003.195 9.73a4.902 4.902 0 01-2.229-.616v.062a4.917 4.917 0 003.946 4.827 4.946 4.946 0 01-2.224.084 4.922 4.922 0 004.6 3.417 9.868 9.868 0 01-6.102 2.105c-.395 0-.787-.023-1.175-.068A13.924 13.924 0 007.548 21c9.057 0 14.01-7.504 14.01-14.01 0-.213-.005-.425-.014-.636A10.03 10.03 0 0024 4.557z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.314 3.608 1.29.977.977 1.229 2.244 1.291 3.61.058 1.267.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.314 2.633-1.291 3.608-.977.977-2.244 1.229-3.61 1.291-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.314-3.608-1.291-.977-.977-1.229-2.244-1.291-3.61C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.314-2.633 1.291-3.608.977-.977 2.244-1.229 3.61-1.291 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.741 0 8.332 0 7.052.069 5.782.137 4.6.424 3.653 1.371c-.947.947-1.234 2.13-1.301 3.4C2.163 5.667 2.163 6.076 2.163 12s0 6.333.07 7.612c.068 1.27.354 2.453 1.301 3.4.947.947 2.13 1.234 3.4 1.301 1.281.068 1.69.069 7.615.069s6.333 0 7.613-.07c1.27-.068 2.453-.354 3.4-1.301.947-.947 1.234-2.13 1.301-3.4.068-1.281.069-1.69.069-7.615s0-6.333-.07-7.613c-.068-1.27-.354-2.453-1.301-3.4-.947-.947-2.13-1.234-3.4-1.301C15.667 0 15.258 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-4 text-center text-gray-500">
          © 2024 YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
