"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import {
  ClubIcon as Football,
  ShoppingBasketIcon as Basketball,
  TurtleIcon as Tennis,
  BirdIcon as Cricket,
  Dices,
  ChevronRight,
  ChevronDown,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type SportCategory = {
  id: string;
  name: string;
  icon: React.ReactNode;
  leagues?: { id: string; name: string }[];
};

const sportCategories: SportCategory[] = [
  {
    id: "football",
    name: "Football",
    icon: <Football className="h-4 w-4" />,
    leagues: [
      { id: "premier-league", name: "Premier League" },
      { id: "la-liga", name: "La Liga" },
      { id: "serie-a", name: "Serie A" },
      { id: "bundesliga", name: "Bundesliga" },
      { id: "ligue-1", name: "Ligue 1" },
    ],
  },
  {
    id: "basketball",
    name: "Basketball",
    icon: <Basketball className="h-4 w-4" />,
    leagues: [
      { id: "nba", name: "NBA" },
      { id: "euroleague", name: "Euroleague" },
    ],
  },
  {
    id: "tennis",
    name: "Tennis",
    icon: <Tennis className="h-4 w-4" />,
    leagues: [
      { id: "atp", name: "ATP" },
      { id: "wta", name: "WTA" },
    ],
  },
  {
    id: "cricket",
    name: "Cricket",
    icon: <Cricket className="h-4 w-4" />,
    leagues: [
      { id: "ipl", name: "IPL" },
      { id: "big-bash", name: "Big Bash" },
    ],
  },
  {
    id: "casino",
    name: "Casino",
    icon: <Dices className="h-4 w-4" />,
  },
];

export default function SideNav() {
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({
    football: true,
  });

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  return (
    <aside className="hidden md:block w-64 bg-white border-r p-4 overflow-y-auto">
      <div className="space-y-1">
        <Button variant="ghost" className="w-full justify-start font-semibold">
          <Star className="mr-2 h-4 w-4 text-yellow-500" />
          Favorites
        </Button>

        {sportCategories.map((category) => (
          <div key={category.id} className="space-y-1">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-between font-semibold",
                expandedCategories[category.id] && "bg-secondary"
              )}
              onClick={() => category.leagues && toggleCategory(category.id)}
            >
              <span className="flex items-center">
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </span>
              {category.leagues &&
                (expandedCategories[category.id] ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                ))}
            </Button>

            {category.leagues && expandedCategories[category.id] && (
              <div className="ml-6 space-y-1">
                {category.leagues.map((league) => (
                  <Link
                    key={league.id}
                    href={`/sports/${category.id}/${league.id}`}
                    className="block py-2 px-3 text-sm rounded-md hover:bg-secondary"
                  >
                    {league.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
