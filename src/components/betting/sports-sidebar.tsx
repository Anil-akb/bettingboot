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
import { useState } from "react";

interface SportsSidebarProps {
  className?: string;
  isCollapsed?: boolean;
}

export function SportsSidebar({ className, isCollapsed }: SportsSidebarProps) {
  const [sportsOpen, setSportsOpen] = useState(true);
  const [leaguesOpen, setLeaguesOpen] = useState(true);

  const sports = [
    { name: "Football", icon: Football, active: true },
    { name: "Basketball", icon: Basketball },
    { name: "Tennis", icon: Tennis },
    { name: "Cricket", icon: Cricket },
    { name: "Volleyball", icon: Volleyball },
    { name: "eSports", icon: Gamepad2 },
  ];

  const popularLeagues = [
    {
      name: "English Premier League",
      icon: <Trophy className="h-4 w-4 " />,
    },
    {
      name: "Spanish La Liga",
      icon: <Trophy className="h-4 w-4 " />,
    },
    {
      name: "UEFA Champions League",
      icon: <Trophy className="h-4 w-4 " />,
    },
    {
      name: "German Bundesliga",
      icon: <Trophy className="h-4 w-4 " />,
    },
    {
      name: "Italian Serie A",
      icon: <Trophy className="h-4 w-4 " />,
    },
    {
      name: "French Ligue 1",
      icon: <Trophy className="h-4 w-4 " />,
    },
  ];

  return (
    <div
      className={cn(
        "border-r border-gray-800 bg-[#131722] text-white transition-all duration-300",
        isCollapsed ? "w-[60px]" : "w-[240px]",
        className
      )}
    >
      <div
        className={cn(
          "transition-all duration-300",
          isCollapsed ? "p-2" : "p-3"
        )}
      >
        {!isCollapsed && (
          <div className="relative mb-3">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search sports..."
              className="h-9 border-gray-700 bg-gray-800 pl-9 text-sm text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500"
            />
          </div>
        )}

        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            {!isCollapsed && (
              <h3 className="text-sm font-medium text-gray-400">Quick Links</h3>
            )}
          </div>
          <div className="space-y-1">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "w-full justify-start text-sm font-normal text-white hover:bg-gray-800 hover:text-green-500 cursor-pointer",
                isCollapsed ? "px-2" : "gap-2"
              )}
            >
              <Trophy className="h-4 w-4 text-green-500" />
              {!isCollapsed && "Live Now"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "w-full justify-start text-sm font-normal text-white hover:bg-gray-800 hover:text-green-500 cursor-pointer",
                isCollapsed ? "px-2" : "gap-2"
              )}
            >
              <Star className="h-4 w-4 text-yellow-400" />
              {!isCollapsed && "My Favorites"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "w-full justify-start text-sm font-normal text-white hover:bg-gray-800 hover:text-green-500 cursor-pointer",
                isCollapsed ? "px-2" : "gap-2"
              )}
            >
              <Headphones className="h-4 w-4 text-blue-500" />
              {!isCollapsed && "Customer Support"}
            </Button>
          </div>
        </div>

        <div className="mb-4">
          <div
            className="mb-2 flex items-center justify-between cursor-pointer"
            onClick={() => setSportsOpen(!sportsOpen)}
          >
            {!isCollapsed && (
              <h3 className="text-sm font-medium text-gray-400">Sports</h3>
            )}
            <ChevronRight
              className={`h-4 w-4 text-gray-400 transition-transform ${
                sportsOpen ? "rotate-90" : ""
              }`}
            />
          </div>
          {sportsOpen && (
            <div className="space-y-1">
              {sports.map((sport) => (
                <Button
                  key={sport.name}
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "w-full justify-start text-sm font-normal text-white hover:bg-gray-800 hover:text-green-500 cursor-pointer",
                    isCollapsed ? "px-2" : "gap-2",
                    sport.active && "bg-gray-800 text-green-500"
                  )}
                >
                  <sport.icon className="h-4 w-4" />
                  {!isCollapsed && sport.name}
                </Button>
              ))}
            </div>
          )}
        </div>

        {!isCollapsed && (
          <div className="mb-4">
            <div
              className="mb-2 flex items-center justify-between cursor-pointer"
              onClick={() => setLeaguesOpen(!leaguesOpen)}
            >
              <h3 className="text-sm font-medium text-gray-400">
                Popular Leagues
              </h3>
              <ChevronRight
                className={`h-4 w-4 text-gray-400 transition-transform ${
                  leaguesOpen ? "rotate-90" : ""
                }`}
              />
            </div>
            {leaguesOpen && (
              <div className="space-y-1">
                {popularLeagues.map((league) => (
                  <Link
                    key={league.name}
                    href="#"
                    className="block rounded-md px-3 py-1.5 text-sm hover:bg-gray-800 hover:text-green-500"
                  >
                    <div className="flex items-center gap-2">
                      {league.icon}
                      {league.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
