import { api } from "encore.dev/api";
import { Query } from "encore.dev/api";
import db from "../db";

interface GetProductsParams {
  category?: Query<string>;
  subcategory?: Query<string>;
  limit?: Query<number>;
}

interface FinancialProduct {
  id: number;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  provider: string;
  price: number;
  features: Record<string, any>;
  created_at: Date;
  updated_at: Date;
}

interface GetProductsResponse {
  products: FinancialProduct[];
}

// Retrieves financial products by category and subcategory.
export const getProducts = api<GetProductsParams, GetProductsResponse>(
  { expose: true, method: "GET", path: "/products" },
  async (params) => {
    const limit = params.limit || 20;
    let query = `SELECT * FROM financial_products WHERE 1=1`;
    const queryParams: any[] = [];
    let paramIndex = 1;

    if (params.category) {
      query += ` AND category = $${paramIndex}`;
      queryParams.push(params.category);
      paramIndex++;
    }

    if (params.subcategory) {
      query += ` AND subcategory = $${paramIndex}`;
      queryParams.push(params.subcategory);
      paramIndex++;
    }

    query += ` ORDER BY created_at DESC LIMIT $${paramIndex}`;
    queryParams.push(limit);

    const rows = await db.rawQueryAll<FinancialProduct>(query, ...queryParams);
    
    return { products: rows };
  }
);
