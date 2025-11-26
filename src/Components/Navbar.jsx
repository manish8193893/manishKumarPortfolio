import { useState, useEffect } from 'react';
import { Github, Mail, Menu, MessagesSquare, Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // prevent background scroll when mobile menu is open
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // close mobile menu on Escape
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isMobileMenuOpen]);

  const navBgClasses = isScrolled
    ? 'bg-crypto-blue/80 backdrop-blur-md py-3 shadow-lg'
    : 'py-6';

  return (
    <nav
      aria-label="Primary"
      className={`fixed w-full z-50 transition-all duration-300 ${navBgClasses}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" aria-label="Home">
            <img src="logo.png" width={88} height={25} alt="Manish Mehra logo" />
          </Link>
        </div>

        <ul className="hidden lg:flex items-center space-x-8">
          <li>
            <Link
              to="/"
              className="text-gray-300 py-2 px-3 navbar-border rounded-md transition-colors hover:text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-300 py-2 px-3 navbar-border rounded-md transition-colors hover:text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-gray-300 py-2 px-3 navbar-border rounded-md transition-colors hover:text-white"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className="text-gray-300 py-2 px-3 navbar-border rounded-md transition-colors hover:text-white"
            >
              Resume
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center space-x-4 px-5">
          <ul className="flex items-center space-x-2">
            <li className="p-2 hover:bg-white/10 rounded-md">
              <a
                className="text-gray-300 transition-colors rounded-md flex items-center"
                href="tel:+918742970516"
                aria-label="Call"
              >
                <Phone />
              </a>
            </li>
            <li className="p-2 hover:bg-white/10 rounded-md">
              <a
                className="text-gray-300 transition-colors rounded-md flex items-center"
                href="mailto:manish8193892@gmail.com"
                aria-label="Email"
              >
                <Mail />
              </a>
            </li>
            <li className="p-2 hover:bg-white/10 rounded-md">
              <a
                className="text-gray-300 transition-colors rounded-md flex items-center"
                href="https://wa.me/+918742970516"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessagesSquare />
              </a>
            </li>
            <li className="p-2 hover:bg-white/10 rounded-md">
              <a
                className="text-gray-300 transition-colors rounded-md flex items-center"
                href="https://github.com/manish8193893"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2 rounded-md hover:bg-white/10"
          onClick={() => setIsMobileMenuOpen((s) => !s)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-crypto-blue/95 backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-lg">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-300 hover:text-white transition-colors block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li className="border-b-2 border-gray-700">
                <Link
                  to="/resume"
                  className="text-gray-300 hover:text-white transition-colors block pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resume
                </Link>
              </li>

              <li className="flex flex-row space-x-2">
                <a
                  className="p-2 border-gray-700 hover:bg-white/10 rounded-md text-gray-300 flex items-center"
                  href="tel:+918742970516"
                  aria-label="Call"
                >
                  <Phone />
                </a>
                <a
                  className="p-2 border-gray-700 hover:bg-white/10 rounded-md text-gray-300 flex items-center"
                  href="mailto:manish8193892@gmail.com"
                  aria-label="Email"
                >
                  <Mail />
                </a>
                <a
                  className="p-2 border-gray-700 hover:bg-white/10 rounded-md text-gray-300 flex items-center"
                  href="https://wa.me/+918742970516"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <MessagesSquare />
                </a>
                <a
                  className="p-2 border-gray-700 hover:bg-white/10 rounded-md text-gray-300 flex items-center"
                  href="https://github.com/manish8193893"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
