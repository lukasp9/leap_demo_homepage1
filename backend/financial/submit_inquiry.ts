import { api } from "encore.dev/api";
import db from "../db";

interface SubmitInquiryParams {
  name: string;
  email: string;
  phone?: string;
  category: string;
  message?: string;
}

interface SubmitInquiryResponse {
  success: boolean;
  inquiryId: number;
}

// Submits a customer inquiry for financial products.
export const submitInquiry = api<SubmitInquiryParams, SubmitInquiryResponse>(
  { expose: true, method: "POST", path: "/inquiry" },
  async (params) => {
    const result = await db.queryRow<{ id: number }>`
      INSERT INTO inquiries (name, email, phone, category, message)
      VALUES (${params.name}, ${params.email}, ${params.phone}, ${params.category}, ${params.message})
      RETURNING id
    `;

    return {
      success: true,
      inquiryId: result!.id
    };
  }
);
