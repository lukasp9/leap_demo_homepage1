export interface FinancialProduct {
  id: number;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  provider: string;
  price: number;
  features: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface Category {
  category: string;
  subcategory: string;
  count: number;
}

export interface InquiryRequest {
  name: string;
  email: string;
  phone?: string;
  category: string;
  message?: string;
}
