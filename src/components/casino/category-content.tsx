"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { CasinoGameCard } from "@/components/casino/CasinoGameCard";
import { mockGames } from "@/components/casino/casino-game-data";

interface CategoryContentProps {
  category: string;
}

export function CategoryContent({ category }: CategoryContentProps) {
  const categories = [
    "Slots",
    "Live Casino",
    "Table Games",
    "Jackpots",
    "All Games",
  ];

  // Filter games based on category
  const filteredGames =
    category === "all-games"
      ? mockGames
      : mockGames.filter(
          (game) => game.category.toLowerCase().replace(" ", "-") === category
        );

  const handlePlayGame = (gameId: string) => {
    console.log(`Playing game ${gameId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/casino">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-green-500"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-white capitalize">
            {category} Games
          </h1>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant="outline"
              className={`border-gray-700 bg-gray-800 text-white hover:bg-gray-700 
                ${
                  cat.toLowerCase().replace(" ", "-") === category
                    ? "bg-gray-700"
                    : ""
                }`}
              asChild
            >
              <Link href={`/casino/${cat.toLowerCase().replace(" ", "-")}`}>
                {cat}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredGames.map((game) => (
          <CasinoGameCard key={game.id} {...game} onPlay={handlePlayGame} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          variant="outline"
          className="border-gray-700 bg-gray-800 text-white hover:bg-gray-700"
        >
          Load More Games
        </Button>
      </div>
    </div>
  );
}
