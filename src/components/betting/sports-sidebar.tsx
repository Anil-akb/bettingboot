import Link from "next/link";
import {
  ShoppingBasketIcon as Basketball,
  ChevronRight,
  BirdIcon as Cricket,
  ClubIcon as Football,
  Gamepad2,
  Headphones,
  Search,
  Star,
  TurtleIcon as Tennis,
  Trophy,
  VibrateIcon as Volleyball,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SportsSidebarProps {
  className?: string;
}

export function SportsSidebar({ className }: SportsSidebarProps) {
  const sports = [
    { name: "Football", icon: Football, active: true },
    { name: "Basketball", icon: Basketball },
    { name: "Tennis", icon: Tennis },
    { name: "Cricket", icon: Cricket },
    { name: "Volleyball", icon: Volleyball },
    { name: "eSports", icon: Gamepad2 },
  ];

  const popularLeagues = [
    "English Premier League",
    "Spanish La Liga",
    "UEFA Champions League",
    "German Bundesliga",
    "Italian Serie A",
    "French Ligue 1",
  ];

  return (
    <div
      className={cn(
        "w-[240px] border-r border-gray-800 bg-[#131722] text-white",
        className
      )}
    >
      <div className="p-3">
        <div className="relative mb-3">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search sports..."
            className="h-9 border-gray-700 bg-gray-800 pl-9 text-sm text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-400">Quick Links</h3>
          </div>
          <div className="space-y-1">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2 text-sm font-normal text-white hover:bg-gray-800 hover:text-green-500"
            >
              <Trophy className="h-4 w-4 text-green-500" />
              Live Now
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2 text-sm font-normal text-white hover:bg-gray-800 hover:text-green-500"
            >
              <Star className="h-4 w-4 text-yellow-400" />
              My Favorites
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2 text-sm font-normal text-white hover:bg-gray-800 hover:text-green-500"
            >
              <Headphones className="h-4 w-4 text-blue-500" />
              Customer Support
            </Button>
          </div>
        </div>

        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-400">Sports</h3>
          </div>
          <div className="space-y-1">
            {sports.map((sport) => (
              <Button
                key={sport.name}
                variant="ghost"
                size="sm"
                className={cn(
                  "w-full justify-start gap-2 text-sm font-normal text-white hover:bg-gray-800 hover:text-green-500",
                  sport.active && "bg-gray-800 text-green-500"
                )}
              >
                <sport.icon className="h-4 w-4" />
                {sport.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-400">
              Popular Leagues
            </h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-5 w-5 text-gray-400 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-1">
            {popularLeagues.map((league) => (
              <Link
                key={league}
                href="#"
                className="block rounded-md px-3 py-1.5 text-sm hover:bg-gray-800 hover:text-green-500"
              >
                {league}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
