import { Car, Home, Heart, PawPrint, Plane } from 'lucide-react';
import CategoryCard from './CategoryCard';

const insuranceCategories = [
  {
    title: 'AUTO',
    icon: Car,
    description: 'Povinné ručení a havarijní pojištění',
    category: 'pojisteni',
    subcategory: 'auto'
  },
  {
    title: 'MAJETEK',
    icon: Home,
    description: 'Pojištění domů, bytů a domácností',
    category: 'pojisteni',
    subcategory: 'majetek'
  },
  {
    title: 'ŽIVOT',
    icon: Heart,
    description: 'Životní a úrazové pojištění',
    category: 'pojisteni',
    subcategory: 'zivot'
  },
  {
    title: 'MAZLÍČCI',
    icon: PawPrint,
    description: 'Pojištění domácích mazlíčků',
    category: 'pojisteni',
    subcategory: 'mazlicek'
  },
  {
    title: 'CESTOVNÍ',
    icon: Plane,
    description: 'Pojištění pro cesty do zahraničí',
    category: 'pojisteni',
    subcategory: 'cestovni'
  }
];

export default function InsuranceSection() {
  return (
    <section id="pojisteni" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">POJIŠTĚNÍ</h2>
        <p className="text-lg text-gray-600">
          Srovnejte si nabídky pojištění od předních českých pojišťoven
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {insuranceCategories.map((category, index) => (
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
