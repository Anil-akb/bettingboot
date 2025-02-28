import React from "react";

export interface Game {
  id: string;
  title: string;
  image: string;
  provider: string;
  type?: "popular" | "new" | "regular";
  category: string;
}

export const mockGames: Game[] = [
  {
    id: "1",
    title: "Sweet Bonanza",
    image: "/games/olympus.png",
    provider: "Pragmatic Play",
    type: "popular",
    category: "Slot",
  },
  {
    id: "2",
    title: "Gates of Olympus",
    image: "/games/casino.png",
    provider: "Pragmatic Play",
    type: "new",
    category: "Slot",
  },
  // Add more mock games as needed
];

export const GameCardSkeleton: React.FC = () => {
  return <div className="aspect-[3/4] bg-gray-800 rounded-lg animate-pulse" />;
};
