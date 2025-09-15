import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-medium text-purple-800 mb-6">
                🎆 Nové funkce vás čekají!
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Srovnejte a sjednejte si{' '}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  finanční produkty
                </span>{' '}
                online
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Porovnávejte nabídky od předních českých poskytovatelů finančních služeb. 
              Najděte si nejlepší pojištění, hypotéku nebo investici rychle a jednoduše.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Začít porovnávat
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-purple-200 hover:border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-xl transition-all"
              >
                Zjistit více
              </Button>
            </div>
          </div>
          
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Video container with enhanced styling */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-2xl shadow-2xl overflow-hidden relative group">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    variant="ghost" 
                    size="lg"
                    className="h-24 w-24 rounded-full bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all transform hover:scale-110 group-hover:scale-110 duration-500"
                  >
                    <Play className="h-10 w-10 ml-1" fill="currentColor" />
                  </Button>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  LIVE
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}