import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import backend from '~backend/client';
import { useToast } from '@/components/ui/use-toast';
import type { FinancialProduct } from '../types/financial';

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  category: string;
  subcategory: string;
  gradient?: string;
}

export default function CategoryCard({ 
  title, 
  icon: Icon, 
  description, 
  category, 
  subcategory,
  gradient = "from-purple-500 to-pink-500"
}: CategoryCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const response = await backend.financial.getProducts({
        category,
        subcategory,
        limit: 10
      });
      
      toast({
        title: `${title} - Nalezeno ${response.products.length} produktů`,
        description: response.products.length > 0 
          ? `Nejlepší nabídka: ${response.products[0].name} od ${response.products[0].provider}`
          : 'Momentálně nemáme žádné produkty v této kategorii.',
      });
    } catch (error) {
      console.error('Failed to fetch products:', error);
      toast({
        title: 'Chyba při načítání',
        description: 'Nepodařilo se načíst produkty. Zkuste to prosím později.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card 
      className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg overflow-hidden relative"
      onClick={handleClick}
    >
      {/* Gradient overlay that appears on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
      </div>
      
      <CardContent className="p-8 text-center relative z-10">
        <div className="flex flex-col items-center space-y-4">
          {/* Enhanced icon container */}
          <div className={`p-5 bg-gradient-to-br ${gradient} rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
            {/* Icon glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
            <Icon className="h-10 w-10 text-white relative z-10 group-hover:rotate-12 transition-transform duration-500" />
          </div>
          
          {/* Enhanced title */}
          <h3 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 text-lg">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
          
          {/* Loading state */}
          {isLoading && (
            <div className="mt-2 text-sm text-purple-600 animate-pulse">
              Načítám produkty...
            </div>
          )}
          
          {/* Animated bottom border */}
          <div className={`w-0 h-1 bg-gradient-to-r ${gradient} group-hover:w-full transition-all duration-500 rounded-full`}></div>
        </div>
      </CardContent>
      
      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
        <div className={`w-full h-full bg-gradient-to-br ${gradient} rounded-bl-full`}></div>
      </div>
    </Card>
  );
}
