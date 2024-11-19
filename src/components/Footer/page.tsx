import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold">Sapphire Fragrances</h2>
            <p className="text-sm mt-2">
              Luxury perfumes crafted for timeless elegance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaPhone size={20} color="#3b82f6" />
                +92 300 1234567
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope size={20} color="#3b82f6" />
                nomanrajar13@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <FaFacebook size={20} color="#3b82f6" />
                123 Perfume Street, Karachi, Pakistan
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} color="#3b82f6 " />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} color="#60a5fa" />
          </a>
          <a
            href="https://www.instagram.com/noman_rajar10/?__pwa=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} color="#f43f5e" />
          </a>
          <a
            href="https://www.linkedin.com/in/noman-rajar-5351bb2b4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} color="#2563eb" />
          </a>
        </div>

        <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} NOMAN FRONTEND DEVOLAPER. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
