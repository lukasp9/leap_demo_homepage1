import { ShoppingCart, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ShoppingCart className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-purple-600">FINANČNÍ MARKET</span>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>info@financnimarket.cz</span>
            </div>
            <div className="flex items-center space-x-3">
              <MessageCircle className="h-5 w-5 text-green-500" />
              <Phone className="h-5 w-5 text-gray-600" />
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6">
                ZAVOLEJTE MI
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="py-4 border-t">
          <div className="flex space-x-8">
            <a href="#pojisteni" className="text-gray-700 hover:text-purple-600 font-medium">
              Pojištění
            </a>
            <a href="#hypoteky" className="text-gray-700 hover:text-purple-600 font-medium">
              Hypotéky
            </a>
            <a href="#investice" className="text-gray-700 hover:text-purple-600 font-medium">
              Investice
            </a>
            <a href="#kontrola" className="text-gray-700 hover:text-purple-600 font-medium">
              Zkontrolovat smlouvu
            </a>
            <a href="#portal" className="text-gray-700 hover:text-purple-600 font-medium">
              Klientský portál
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
