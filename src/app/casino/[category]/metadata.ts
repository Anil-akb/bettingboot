import type { Metadata } from "next";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  return {
    title: `${
      params.category.charAt(0).toUpperCase() + params.category.slice(1)
    } Games - Casino`,
  };
}
