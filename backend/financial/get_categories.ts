import { api } from "encore.dev/api";
import db from "../db";

interface Category {
  category: string;
  subcategory: string;
  count: number;
}

interface GetCategoriesResponse {
  categories: Category[];
}

// Retrieves all available financial product categories.
export const getCategories = api<void, GetCategoriesResponse>(
  { expose: true, method: "GET", path: "/categories" },
  async () => {
    const rows = await db.queryAll<Category>`
      SELECT category, subcategory, COUNT(*) as count
      FROM financial_products 
      GROUP BY category, subcategory
      ORDER BY category, subcategory
    `;
    
    return { categories: rows };
  }
);
