"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ClubIcon as Football,
  ShoppingBasketIcon as Basketball,
  TurtleIcon as Tennis,
  BirdIcon as Cricket,
  Dices,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

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
  const [isMounted, setIsMounted] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedSubMenus, setExpandedSubMenus] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  const toggleSubMenu = (menuId: string) => {
    setExpandedSubMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  if (!isMounted) {
    return (
      <aside className="fixed left-0 top-16 bottom-0 w-64 border-r bg-background" />
    );
  }

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 border-r bg-background flex flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {/* Popular Leagues Section */}
          <div className="sidebar-dropdown">
            <button
              type="button"
              onClick={() => toggleSection("leagues")}
              className="sidebar-dropdown-trigger"
            >
              <span>Popular Leagues</span>
              {expandedSection === "leagues" ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            <div
              className={`submenu-content ${
                expandedSection === "leagues" ? "expanded" : ""
              }`}
            >
              <div>
                {sportCategories
                  .filter((cat) => cat.leagues)
                  .map((category) => (
                    <div key={category.id}>
                      <button
                        type="button"
                        onClick={() => toggleSubMenu(`leagues-${category.id}`)}
                        className="submenu-item flex items-center justify-between w-full"
                      >
                        <span className="flex items-center">
                          {category.icon}
                          <span className="ml-2">{category.name}</span>
                        </span>
                        {expandedSubMenus[`leagues-${category.id}`] ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                      <div
                        className={`submenu-content ${
                          expandedSubMenus[`leagues-${category.id}`]
                            ? "expanded"
                            : ""
                        }`}
                      >
                        <div>
                          {category.leagues?.map((league) => (
                            <Link
                              key={league.id}
                              href={`/sports/${category.id}/${league.id}`}
                              className="submenu-item block ml-8"
                            >
                              {league.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Sports Section */}
          <div className="sidebar-dropdown">
            <button
              type="button"
              onClick={() => toggleSection("sports")}
              className="sidebar-dropdown-trigger"
            >
              <span>Sports</span>
              {expandedSection === "sports" ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            <div
              className={`submenu-content cursor-pointer ${
                expandedSection === "sports" ? "expanded" : ""
              }`}
            >
              <div>
                {sportCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/sports/${category.id}`}
                    className="submenu-item"
                  >
                    <span className="flex items-center">
                      {category.icon}
                      <span className="ml-2">{category.name}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="sidebar-dropdown">
            <button
              type="button"
              onClick={() => toggleSection("quicklinks")}
              className="sidebar-dropdown-trigger cursor-pointer"
            >
              <span>Quick Links</span>
              {expandedSection === "quicklinks" ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            <div
              className={`submenu-content ${
                expandedSection === "quicklinks" ? "expanded" : ""
              }`}
            >
              <div>
                {[
                  { name: "Live Betting", href: "/live-betting" },
                  { name: "Today's Matches", href: "/today" },
                  { name: "Promotions", href: "/promotions" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="submenu-item"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
