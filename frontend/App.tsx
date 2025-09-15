import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InsuranceSection from './components/InsuranceSection';
import LoansSection from './components/LoansSection';
import InvestmentsSection from './components/InvestmentsSection';
import { Toaster } from '@/components/ui/toaster';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          <InsuranceSection />
          <LoansSection />
          <InvestmentsSection />
        </div>
      </main>
      <Toaster />
    </div>
  );
}
