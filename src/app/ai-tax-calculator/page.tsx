import { AiTaxCalculatorPage } from "@/components/home/AiTaxCalculatorPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tax Calculator | Noctua Tech",
  description:
    "Explore tax-related scenarios with AI-assisted guidance. Informational only—not a substitute for professional tax or legal advice.",
};

export default function AiTaxCalculatorRoute() {
  return <AiTaxCalculatorPage />;
}
