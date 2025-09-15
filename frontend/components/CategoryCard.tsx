import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import backend from '~backend/client';
import { useToast } from './ui/use-toast';
import type { FinancialProduct } from '../types/financial';

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  category: string;
  subcategory: string;
}

export default function CategoryCard({ 
  title, 
  icon: Icon, 
  description, 
  category, 
  subcategory 
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
      className="hover:shadow-lg transition-shadow cursor-pointer group"
      onClick={handleClick}
    >
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="p-3 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
            <Icon className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-2 text-gray-900">
          {title}
        </h3>
        <p className="text-sm text-gray-600">
          {description}
        </p>
        {isLoading && (
          <div className="mt-2 text-sm text-purple-600">
            Načítám produkty...
          </div>
        )}
      </CardContent>
    </Card>
  );
}
