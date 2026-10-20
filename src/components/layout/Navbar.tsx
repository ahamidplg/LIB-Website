import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200'
          : 'bg-white border-b border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark & Official Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0069D2] rounded-md p-1"
            title="CV Lintas Informatika Buana"
          >
            <img
              src="/assets/aistudio/LIB-Global-Tech-Solutions-Logo_2262369b.png"
              alt="Logo CV Lintas Informatika Buana"
              className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Zone 2: 4–5 concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <Link
              to="/"
              className={`whitespace-nowrap shrink-0 hover:text-[#0069D2] transition-colors py-1 ${
                isActive('/') ? 'text-[#0069D2] font-semibold border-b-2 border-[#0069D2]' : ''
              }`}
            >
              Beranda
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1 whitespace-nowrap shrink-0 hover:text-[#0069D2] transition-colors py-1 ${
                  location.pathname.startsWith('/services') ? 'text-[#0069D2] font-semibold' : ''
                }`}
              >
                <span>Layanan</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>

              {dropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-72 z-50">
                  <div className="bg-white rounded-xl shadow-lg border border-slate-200 py-2">
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider hover:bg-slate-50"
                    >
                      Semua Kategori Layanan
                    </Link>
                    <Link
                      to="/services#consulting-governance"
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#F1F6FB] hover:text-[#0069D2]"
                    >
                      IT Consulting & Governance
                    </Link>
                    <Link
                      to="/cybersecurity-governance"
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#F1F6FB] hover:text-[#0069D2]"
                    >
                      Cybersecurity & IT Governance
                    </Link>
                    <Link
                      to="/iso-consulting"
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#F1F6FB] hover:text-[#0069D2]"
                    >
                      ISO Consulting (27001 & 9001)
                    </Link>
                    <Link
                      to="/services#software-dev"
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#F1F6FB] hover:text-[#0069D2]"
                    >
                      Software & App Development
                    </Link>
                    <Link
                      to="/services#infra-integration"
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-[#F1F6FB] hover:text-[#0069D2]"
                    >
                      IT Infrastructure & Integration
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/products"
              className={`whitespace-nowrap shrink-0 hover:text-[#0069D2] transition-colors py-1 ${
                location.pathname.startsWith('/products') ? 'text-[#0069D2] font-semibold border-b-2 border-[#0069D2]' : ''
              }`}
            >
              Katalog Produk
            </Link>

            <Link
              to="/iso-consulting"
              className={`whitespace-nowrap shrink-0 hover:text-[#0069D2] transition-colors py-1 ${
                isActive('/iso-consulting') ? 'text-[#0069D2] font-semibold border-b-2 border-[#0069D2]' : ''
              }`}
            >
              ISO Consulting
            </Link>

            <Link
              to="/solutions"
              className={`whitespace-nowrap shrink-0 hover:text-[#0069D2] transition-colors py-1 ${
                location.pathname.startsWith('/solutions') ? 'text-[#0069D2] font-semibold border-b-2 border-[#0069D2]' : ''
              }`}
            >
              Solusi Bisnis
            </Link>

            <Link
              to="/about"
              className={`whitespace-nowrap shrink-0 hover:text-[#0069D2] transition-colors py-1 ${
                isActive('/about') ? 'text-[#0069D2] font-semibold border-b-2 border-[#0069D2]' : ''
              }`}
            >
              Tentang Kami
            </Link>

            <Link
              to="/insights"
              className={`whitespace-nowrap shrink-0 hover:text-[#0069D2] transition-colors py-1 ${
                location.pathname.startsWith('/insights') ? 'text-[#0069D2] font-semibold border-b-2 border-[#0069D2]' : ''
              }`}
            >
              Artikel
            </Link>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0069D2] hover:bg-[#08204C] rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0069D2] focus-visible:ring-offset-2"
            >
              Konsultasi Sekarang
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-[#0069D2] rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0069D2]"
              aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-md animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-2 text-base font-medium text-slate-800">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md ${isActive('/') ? 'bg-[#F1F6FB] text-[#0069D2] font-semibold' : 'hover:bg-slate-50'}`}
            >
              Beranda
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md ${isActive('/about') ? 'bg-[#F1F6FB] text-[#0069D2] font-semibold' : 'hover:bg-slate-50'}`}
            >
              Tentang Kami & Legalitas
            </Link>
            <Link
              to="/services"
              className={`px-3 py-2 rounded-md ${location.pathname.startsWith('/services') ? 'bg-[#F1F6FB] text-[#0069D2] font-semibold' : 'hover:bg-slate-50'}`}
            >
              Layanan Teknologi
            </Link>
            <Link
              to="/iso-consulting"
              className={`px-3 py-2 rounded-md ${isActive('/iso-consulting') ? 'bg-[#F1F6FB] text-[#0069D2] font-semibold' : 'hover:bg-slate-50'}`}
            >
              ISO Consulting (27001 & 9001)
            </Link>
            <Link
              to="/cybersecurity-governance"
              className={`px-3 py-2 rounded-md ${isActive('/cybersecurity-governance') ? 'bg-[#F1F6FB] text-[#0069D2] font-semibold' : 'hover:bg-slate-50'}`}
            >
              Cybersecurity & IT Governance
            </Link>
            <Link
              to="/products"
              className={`px-3 py-2 rounded-md ${location.pathname.startsWith('/products') ? 'bg-[#F1F6FB] text-[#0069D2] font-semibold' : 'hover:bg-slate-50'}`}
            >
              Katalog Produk
            </Link>
            <Link
              to="/solutions"
              className={`px-3 py-2 rounded-md ${location.pathname.startsWith('/solutions') ? 'bg-[#F1F6FB] text-[#0069D2] font-semibold' : 'hover:bg-slate-50'}`}
            >
              Solusi Kebutuhan Bisnis
            </Link>
            <Link
              to="/portfolio"
              className={`px-3 py-2 rounded-md ${location.pathname.startsWith('/portfolio') ? 'bg-[#F1F6FB] text-[#0069D2] font-semibold' : 'hover:bg-slate-50'}`}
            >
              Portofolio Konseptual
            </Link>
            <Link
              to="/insights"
              className={`px-3 py-2 rounded-md ${location.pathname.startsWith('/insights') ? 'bg-[#F1F6FB] text-[#0069D2] font-semibold' : 'hover:bg-slate-50'}`}
            >
              Artikel & Edukasi
            </Link>
            <Link
              to="/privacy-policy"
              className={`px-3 py-2 rounded-md ${isActive('/privacy-policy') ? 'bg-[#F1F6FB] text-[#0069D2] font-semibold' : 'hover:bg-slate-50'}`}
            >
              Kebijakan Privasi
            </Link>

            <div className="pt-3">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-[#0069D2] hover:bg-[#08204C] rounded-lg shadow-xs transition-colors"
              >
                Konsultasi Sekarang
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
