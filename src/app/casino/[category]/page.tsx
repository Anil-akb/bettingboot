import { CategoryContent } from "@/components/casino/category-content";
import type { Metadata } from "next";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `${
      resolvedParams.category.charAt(0).toUpperCase() +
      resolvedParams.category.slice(1)
    } Games - Casino`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  return <CategoryContent category={resolvedParams.category} />;
}
