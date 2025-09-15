import { Home, CreditCard, RefreshCw, Building2 } from 'lucide-react';
import CategoryCard from './CategoryCard';

const loanCategories = [
  {
    title: 'HYPOTÉKY',
    icon: Home,
    description: 'Úvěry na bydlení a refinancování',
    category: 'uvery',
    subcategory: 'hypoteky'
  },
  {
    title: 'ÚVĚR NA COKOLIV',
    icon: CreditCard,
    description: 'Osobní úvěry bez účelu',
    category: 'uvery',
    subcategory: 'cokoliv'
  },
  {
    title: 'KONSOLIDACE',
    icon: RefreshCw,
    description: 'Sjednocení všech úvěrů',
    category: 'uvery',
    subcategory: 'konsolidace'
  },
  {
    title: 'PODNIKATELSKÉ',
    icon: Building2,
    description: 'Úvěry pro firmy a podnikatele',
    category: 'uvery',
    subcategory: 'podnikatelske'
  }
];

export default function LoansSection() {
  return (
    <section id="uvery" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">ÚVĚRY</h2>
        <p className="text-lg text-gray-600">
          Najděte si nejvýhodnější úvěr od předních českých bank
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loanCategories.map((category, index) => (
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
