import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";

interface GameItem {
  id: string;
  name: string;
  image: string;
  category: string;
}

const sampleGames: GameItem[] = [
  {
    id: "1",
    name: "Starburst",
    image: "/games/girl-casino.jpg",
    category: "Slots",
  },
  {
    id: "2",
    name: "Blackjack Live",
    image: "/games/girl-casino-1.jpg",
    category: "Live Casino",
  },
  {
    id: "3",
    name: "Gonzo's Quest",
    image: "/games/man-casino.jpg",
    category: "Slots",
  },
  {
    id: "4",
    name: "Roulette Pro",
    image: "/games/man-casino-2.jpg",
    category: "Table Games",
  },
  {
    id: "5",
    name: "Mega Moolah",
    image: "/games/group-casino-1.jpg",
    category: "Jackpots",
  },
  {
    id: "6",
    name: "Book of Dead",
    image: "/games/group-casino-2.jpg",
    category: "Slots",
  },
  {
    id: "7",
    name: "Lightning Roulette",
    image: "/games/girl-casino-1.jpg",
    category: "Live Casino",
  },
  {
    id: "8",
    name: "Dead or Alive",
    image: "/games/casino.png",
    category: "Slots",
  },
  {
    id: "9",
    name: "Mega Fortune",
    image: "/games/group-casino-2.jpg",
    category: "Jackpots",
  },
  {
    id: "10",
    name: "Poker Pro",
    image: "/games/casino.png",
    category: "Table Games",
  },
  {
    id: "11",
    name: "Sweet Bonanza",
    image: "/games/girl-casino-1.jpg",
    category: "Slots",
  },
  {
    id: "12",
    name: "Crazy Time",
    image: "/games/man-casino.jpg",
    category: "Live Casino",
  },
];

export const metadata: Metadata = {
  title: "Casino Games",
};

export default function CasinoPage() {
  const categories = [
    "Slots",
    "Live Casino",
    "Table Games",
    "Jackpots",
    "All Games",
  ];

  const popularGames = [
    "Starburst",
    "Gonzo's Quest",
    "Book of Dead",
    "Sweet Bonanza",
    "Crazy Time",
  ];

  const quickLinks = [
    "New Games",
    "Popular Games",
    "Jackpot Games",
    "Live Dealers",
    "Table Games",
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-white mb-4">Casino Games</h1>
      <div className="flex flex-wrap gap-4 mb-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="border-gray-700 bg-gray-800 text-white hover:bg-gray-700"
            >
              Categories <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-gray-700">
            {categories.map((category) => (
              <DropdownMenuItem
                key={category}
                className="text-white hover:bg-gray-700"
              >
                <Link
                  href={`/casino/${category.toLowerCase().replace(" ", "-")}`}
                  className="w-full"
                >
                  {category}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="border-gray-700 bg-gray-800 text-white hover:bg-gray-700"
            >
              Popular Games <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-gray-700">
            {popularGames.map((game) => (
              <DropdownMenuItem
                key={game}
                className="text-white hover:bg-gray-700"
              >
                <Link
                  href={`/casino/game/${game.toLowerCase().replace(" ", "-")}`}
                  className="w-full"
                >
                  {game}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="border-gray-700 bg-gray-800 text-white hover:bg-gray-700"
            >
              Quick Links <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-gray-700">
            {quickLinks.map((link) => (
              <DropdownMenuItem
                key={link}
                className="text-white hover:bg-gray-700"
              >
                <Link
                  href={`/casino/${link.toLowerCase().replace(" ", "-")}`}
                  className="w-full"
                >
                  {link}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {sampleGames.map((game) => (
          <div
            key={game.id}
            className="group relative aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
          >
            <Image
              src={game.image}
              alt={game.name}
              fill
              className="object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-2 left-2 right-2">
                <h3 className="text-white text-sm font-medium truncate">
                  {game.name}
                </h3>
                <p className="text-gray-300 text-xs">{game.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
