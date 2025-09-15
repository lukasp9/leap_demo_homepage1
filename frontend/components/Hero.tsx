import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Srovnejte a sjednejte si{' '}
              <span className="text-purple-600">finanční produkty</span> online
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Porovnávejte nabídky od předních českých poskytovatelů finančních služeb. 
              Najděte si nejlepší pojištění, hypotéku nebo investici rychle a jednoduše.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              Začít porovnávat
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <Button 
                variant="ghost" 
                size="lg"
                className="h-20 w-20 rounded-full bg-white/20 hover:bg-white/30 text-white"
              >
                <Play className="h-8 w-8 ml-1" fill="currentColor" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
