import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Section */}
        <div className="flex justify-between items-center flex-wrap">
          <div>
            <h1 className="text-lg font-bold">My Blog Website</h1>
            <p className="text-sm">&copy; 2024 MyWebsite. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {/* Social Media Links */}
            <Link
              href="https://www.facebook.com/muhammad.tahaawan.7"
              target="_blank"
              className="hover:text-blue-500 transition-colors"
             
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://x.com/taha__awan?t=qHEAQ1nGJr7kw9nP-lTKNQ&s=09"
              target="_blank"
              className="hover:text-blue-400 transition-colors"
              
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-taha-4735912b6/"
              target="_blank"
              className="hover:text-blue-600 transition-colors"
             
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/tahaawan598/?next=%2F"
              target="_blank"
              className="hover:text-pink-500 transition-colors"
              
            >
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-6">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link
                href="#"
                className="text-sm hover:text-gray-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm hover:text-gray-400 transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="text-sm hover:text-gray-400 transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
