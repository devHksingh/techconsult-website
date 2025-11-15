import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';

// Professional color scheme for IT Consulting
const colors = {
  primary: '#0F172A', // Deep navy
  secondary: '#3B82F6', // Professional blue
  accent: '#06B6D4', // Cyan accent
  text: '#1E293B',
  textLight: '#64748B',
  background: '#FFFFFF',
};

const navItems = [
  { name: 'Services', link: '/services' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar with contact info - hidden on scroll */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: visible ? 0 : 1,
          y: visible ? -50 : 0,
          height: visible ? 0 : 'auto',
        }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden"
        style={{ backgroundColor: colors.primary }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-10 text-xs sm:text-sm">
            <div className="flex items-center gap-4 sm:gap-6 text-slate-300">
              <a
                href="mailto:info@techconsult.com"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail size={14} />
                <span className="hidden sm:inline">info@techconsult.com</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Phone size={14} />
                <span className="hidden sm:inline">+1 (555) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main navigation */}
      <motion.nav
        animate={{
          backgroundColor: visible ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 1)',
          backdropFilter: visible ? 'blur(12px)' : 'none',
          boxShadow: visible
            ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        }}
        transition={{ duration: 0.3 }}
        className="relative bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg group-hover:shadow-xl transition-shadow"
              >
                IT
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg leading-tight" style={{ color: colors.primary }}>
                  TechConsult
                </span>
                <span className="text-xs hidden sm:block" style={{ color: colors.textLight }}>
                  IT Solutions & Consulting
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div 
              className="hidden lg:flex items-center gap-1"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  className="relative px-5 py-2.5 text-sm font-medium transition-colors"
                  style={{ color: hoveredIndex === idx ? colors.secondary : colors.text }}
                >
                  {hoveredIndex === idx && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50"
                      style={{
                        boxShadow: '0 0 0 1px rgba(59, 130, 246, 0.1)',
                      }}
                      transition={{ 
                        type: 'spring', 
                        bounce: 0.2, 
                        duration: 0.6 
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/contact"
                className="px-5 py-2.5 text-sm font-semibold rounded-lg transition-all hover:scale-105 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  Book a Consultation
                  <ArrowRight size={16} />
                </span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              style={{ color: colors.primary }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-slate-200 overflow-hidden bg-white"
            >
              <div className="px-4 py-6 space-y-3">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="block px-4 py-3 text-base font-medium rounded-lg hover:bg-slate-50 transition-colors"
                    style={{ color: colors.text }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="pt-4">
                  <a
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-6 py-3 text-center text-sm font-semibold rounded-lg transition-all bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Book a Consultation
                      <ArrowRight size={16} />
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Header;