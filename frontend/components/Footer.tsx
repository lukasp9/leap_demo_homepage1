import { TrendingUp, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  FINANČNÍ
                </span>
                <br />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  MARKET
                </span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Váš spolehlivý partner pro porovnávání a výběr nejlepších finančních produktů na českém trhu.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-purple-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-6">Služby</h3>
            <div className="space-y-3">
              {[
                'Pojištění vozidel',
                'Životní pojištění',
                'Hypoteční úvěry',
                'Spotřebitelské úvěry',
                'Investiční produkty',
                'Penzijní fondy'
              ].map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-300 hover:text-purple-300 transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-6">Užitečné odkazy</h3>
            <div className="space-y-3">
              {[
                'O nás',
                'Jak to funguje',
                'Často kladené otázky',
                'Blog',
                'Kariéra',
                'Kontakt'
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-300 hover:text-purple-300 transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Wenceslas Square 1</p>
                  <p>110 00 Praha 1</p>
                  <p>Česká republika</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <a 
                  href="mailto:info@financnimarket.cz" 
                  className="text-gray-300 hover:text-purple-300 transition-colors"
                >
                  info@financnimarket.cz
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <a 
                  href="tel:+420123456789" 
                  className="text-gray-300 hover:text-purple-300 transition-colors"
                >
                  +420 123 456 789
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Finanční Market. Všechna práva vyhrazena.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                Podmínky použití
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                Ochrana osobních údajů
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}