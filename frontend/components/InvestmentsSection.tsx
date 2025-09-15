import { PiggyBank, TrendingUp, Building } from 'lucide-react';
import CategoryCard from './CategoryCard';

const investmentCategories = [
  {
    title: 'PENZIJKO',
    icon: PiggyBank,
    description: 'Penzijní připojištění a fondy',
    category: 'investice',
    subcategory: 'penzijko'
  },
  {
    title: 'PODÍLOVÉ FONDY',
    icon: TrendingUp,
    description: 'Investiční a podílové fondy',
    category: 'investice',
    subcategory: 'podilove'
  },
  {
    title: 'NEMOVITOSTNÍ FONDY',
    icon: Building,
    description: 'Investice do nemovitostí',
    category: 'investice',
    subcategory: 'nemovitostni'
  }
];

export default function InvestmentsSection() {
  return (
    <section id="investice" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">INVESTICE</h2>
        <p className="text-lg text-gray-600">
          Investujte chytře s pomocí našich expertů
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {investmentCategories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            icon={category.icon}
            description={category.description}
            category={category.category}
            subcategory={category.subcategory}
          />
        ))}
      </div>
    </section>
  );
}
