"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface GameCardProps {
  id: string;
  title: string;
  image: string;
  provider: string;
  type?: "popular" | "new" | "regular";
  onPlay?: (gameId: string) => void;
}

export const CasinoGameCard = ({
  id,
  title,
  image,
  provider,
  type = "regular",
  onPlay,
}: GameCardProps) => {
  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-800">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        onError={(e) => {
          // Fallback to a default image if the original fails to load
          const target = e.target as HTMLImageElement;
          target.src = "/games/olympus.png";
        }}
        priority={type === "popular"} // Prioritize loading popular games
      />
      {type !== "regular" && (
        <div className="absolute top-2 right-2 z-10">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              type === "new" ? "bg-blue-500" : "bg-yellow-500"
            } text-white`}
          >
            {type === "new" ? "New" : "Popular"}
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute bottom-0 w-full p-4">
          <h3 className="text-sm font-medium text-white">{title}</h3>
          <p className="text-xs text-gray-300">{provider}</p>
          <Button
            className="mt-2 w-full bg-green-600 hover:bg-green-700"
            size="sm"
            onClick={() => onPlay?.(id)}
          >
            Play Now
          </Button>
        </div>
      </div>
    </div>
  );
};

// Common game data type
export interface Game {
  id: string;
  title: string;
  image: string;
  provider: string;
  type?: "popular" | "new" | "regular";
}

// Mock data that can be imported and used across different casino pages
export const mockGames: Game[] = [
  {
    id: "1",
    title: "Sweet Bonanza",
    image: "/games/olympus.png",
    provider: "Pragmatic Play",
    type: "popular",
  },
  {
    id: "2",
    title: "Gates of Olympus",
    image: "/games/casino.png",
    provider: "Pragmatic Play",
    type: "new",
  },
  // Add more mock games as needed
];
