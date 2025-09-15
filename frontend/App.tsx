import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InsuranceSection from './components/InsuranceSection';
import LoansSection from './components/LoansSection';
import InvestmentsSection from './components/InvestmentsSection';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Header />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
          <InsuranceSection />
          <LoansSection />
          <InvestmentsSection />
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
