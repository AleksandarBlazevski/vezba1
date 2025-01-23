import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import { useRouter } from 'next/router';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoModal, setShowLogoModal] = useState(false);
  const router = useRouter();

  const isActive = (href: string) => router.pathname === href;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Logo Modal */}
      {showLogoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setShowLogoModal(false)}>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl transform transition-all max-w-lg w-full">
            <div className="flex justify-end">
              <button onClick={() => setShowLogoModal(false)} className="text-gray-500 hover:text-gray-700">
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col items-center p-4">
              <img src="/logo.svg" alt="NGC Logo" className="w-48 h-48 mb-4" />
              <h2 className="text-3xl font-bold text-gradient mb-2">NGC</h2>
              <p className="text-lg text-cyan-500">next generation code</p>
            </div>
          </div>
        </div>
      )}

      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="glass border-b border-white/10 backdrop-blur-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center cursor-pointer" onClick={() => setShowLogoModal(true)}>
                <img src="/logo.svg" alt="NGC Logo" className="h-10 w-10 mr-2 transition-transform hover:scale-110" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gradient">NGC</span>
                  <span className="text-sm text-cyan-500">next generation code</span>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      isActive(item.href)
                        ? 'text-primary-light dark:text-primary-dark'
                        : 'text-secondary-light/80 dark:text-secondary-dark/80 hover:text-primary-light dark:hover:text-primary-dark'
                    } transition-colors duration-200`}
                  >
                    {item.name}
                  </Link>
                ))}
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <ThemeToggle />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="ml-4 p-2 rounded-lg text-secondary-light/80 dark:text-secondary-dark/80 hover:bg-white/10 dark:hover:bg-black/10 transition-colors duration-200"
                >
                  {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden glass border-b border-white/10"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${
                        isActive(item.href)
                          ? 'text-primary-light dark:text-primary-dark bg-white/10 dark:bg-black/10'
                          : 'text-secondary-light/80 dark:text-secondary-dark/80'
                      } px-4 py-2 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-colors duration-200`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
