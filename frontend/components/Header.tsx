import { TrendingUp, Phone, MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Navigation */}
      <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'w-[95%] max-w-6xl' 
          : 'w-[98%] max-w-7xl'
      }`}>
        <div className={`bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 transition-all duration-300 ${
          isScrolled ? 'py-3 px-6' : 'py-4 px-8'
        }`}>
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  FINANČNÍ
                </span>
                <br className="md:hidden" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent md:ml-1">
                  MARKET
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#pojisteni" className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group">
                Pojištění
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#hypoteky" className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group">
                Hypotéky
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#investice" className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group">
                Investice
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#kontrola" className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group">
                Zkontrolovat
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#portal" className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group">
                Portál
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </a>
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="hidden lg:inline">info@financnimarket.cz</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-emerald-500 hover:scale-110 transition-transform cursor-pointer" />
                <Phone className="h-5 w-5 text-gray-600 hover:scale-110 transition-transform cursor-pointer" />
              </div>
              <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                ZAVOLEJTE MI
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3">
                <a href="#pojisteni" className="text-gray-700 hover:text-purple-600 font-medium py-2 px-3 rounded-lg hover:bg-purple-50 transition-all">
                  Pojištění
                </a>
                <a href="#hypoteky" className="text-gray-700 hover:text-purple-600 font-medium py-2 px-3 rounded-lg hover:bg-purple-50 transition-all">
                  Hypotéky
                </a>
                <a href="#investice" className="text-gray-700 hover:text-purple-600 font-medium py-2 px-3 rounded-lg hover:bg-purple-50 transition-all">
                  Investice
                </a>
                <a href="#kontrola" className="text-gray-700 hover:text-purple-600 font-medium py-2 px-3 rounded-lg hover:bg-purple-50 transition-all">
                  Zkontrolovat smlouvu
                </a>
                <a href="#portal" className="text-gray-700 hover:text-purple-600 font-medium py-2 px-3 rounded-lg hover:bg-purple-50 transition-all">
                  Klientský portál
                </a>
                <div className="pt-3 border-t border-gray-200">
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl">
                    ZAVOLEJTE MI
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
      
      {/* Spacer to prevent content from hiding behind floating nav */}
      <div className="h-24"></div>
    </>
  );
}
