import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  ChevronDown,
  ChevronRight,
  Globe,
  Menu,
  Search,
  Star,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BettingSlip } from "@/components/betting/betting-slip";
import MatchCard from "@/components/betting/match-card";
import PromoBanner from "@/components/marketing/promo-banner";
import { SportsSidebar } from "@/components/betting/sports-sidebar";
import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#1a1e25]">
      {/* Header */}
      <Header />
      <div className="flex flex-1">
        {/* Sports Sidebar */}
        <SportsSidebar className="hidden md:block" />

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {/* Hero Banner */}
          <div className="relative h-[200px] w-full overflow-hidden md:h-[300px]">
            <Image
              src="/placeholder.svg?height=300&width=1200"
              alt="Welcome Bonus"
              width={1200}
              height={300}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-r from-black/70 to-transparent p-6">
              <h1 className="mb-2 text-2xl font-bold text-white md:text-4xl">
                Welcome Bonus
              </h1>
              <p className="mb-4 max-w-md text-sm text-gray-200 md:text-base">
                Get up to 100% bonus on your first deposit!
              </p>
              <Button className="bg-green-600 text-white hover:bg-green-700">
                Claim Now
              </Button>
            </div>
          </div>

          {/* Promo Banners */}
          <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
            <PromoBanner
              title="Casino Bonus"
              description="Play and get 50 free spins"
              image="/placeholder.svg?height=120&width=320"
            />
            <PromoBanner
              title="Refer a Friend"
              description="Get KSh 500 for each referral"
              image="/placeholder.svg?height=120&width=320"
            />
            <PromoBanner
              title="Accumulator Bonus"
              description="Up to 50% bonus on winning accumulators"
              image="/placeholder.svg?height=120&width=320"
            />
          </div>

          {/* Betting Section */}
          <div className="p-4">
            <Tabs defaultValue="highlights" className="w-full">
              <div className="flex items-center justify-between">
                <TabsList className="bg-gray-800">
                  <TabsTrigger
                    value="highlights"
                    className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                  >
                    Highlights
                  </TabsTrigger>
                  <TabsTrigger
                    value="live"
                    className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                  >
                    Live Now
                  </TabsTrigger>
                  <TabsTrigger
                    value="upcoming"
                    className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                  >
                    Upcoming
                  </TabsTrigger>
                </TabsList>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1 text-gray-400 hover:text-white"
                >
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="hidden md:inline">Favorites</span>
                </Button>
              </div>

              <TabsContent value="highlights" className="mt-4">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white">Football</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 text-green-500 hover:text-green-400"
                  >
                    See All <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid gap-3">
                  <MatchCard
                    league="English Premier League"
                    homeTeam="Arsenal"
                    awayTeam="Chelsea"
                    time="Today, 19:30"
                    odds={{
                      home: "2.10",
                      draw: "3.40",
                      away: "3.60",
                    }}
                  />
                  <MatchCard
                    league="Spanish La Liga"
                    homeTeam="Barcelona"
                    awayTeam="Real Madrid"
                    time="Today, 21:00"
                    odds={{
                      home: "2.45",
                      draw: "3.30",
                      away: "2.90",
                    }}
                    featured={true}
                  />
                  <MatchCard
                    league="Italian Serie A"
                    homeTeam="AC Milan"
                    awayTeam="Inter Milan"
                    time="Tomorrow, 20:45"
                    odds={{
                      home: "2.70",
                      draw: "3.20",
                      away: "2.60",
                    }}
                  />
                </div>

                <div className="mb-4 mt-8 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white">Basketball</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 text-green-500 hover:text-green-400"
                  >
                    See All <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid gap-3">
                  <MatchCard
                    league="NBA"
                    homeTeam="LA Lakers"
                    awayTeam="Boston Celtics"
                    time="Today, 23:00"
                    odds={{
                      home: "1.85",
                      away: "1.95",
                    }}
                    type="basketball"
                  />
                  <MatchCard
                    league="NBA"
                    homeTeam="Golden State Warriors"
                    awayTeam="Brooklyn Nets"
                    time="Tomorrow, 02:30"
                    odds={{
                      home: "1.75",
                      away: "2.05",
                    }}
                    type="basketball"
                  />
                </div>
              </TabsContent>

              <TabsContent value="live" className="mt-4">
                <div className="rounded-md bg-gray-800 p-6 text-center">
                  <p className="text-gray-400">No live matches at the moment</p>
                </div>
              </TabsContent>

              <TabsContent value="upcoming" className="mt-4">
                <div className="rounded-md bg-gray-800 p-6 text-center">
                  <p className="text-gray-400">
                    Check back soon for upcoming matches
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>

        {/* Betting Slip */}
        <BettingSlip className="hidden lg:block" />
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-[#131722] px-4 py-6 text-gray-400 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-white">
                Sports
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-green-500">
                    Football
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-500">
                    Basketball
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-500">
                    Tennis
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-500">
                    Cricket
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-white">
                Casino
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-green-500">
                    Slots
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-500">
                    Live Casino
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-500">
                    Table Games
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-500">
                    Jackpots
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-white">
                Help
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-green-500">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-500">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-500">
                    Responsible Gambling
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-500">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-white">
                About
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-green-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-500">
                    Affiliates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-500">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-500">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-6 text-center text-xs">
            <p>© 2024 BantuBet. All rights reserved.</p>
            <p className="mt-2">18+ | Gamble Responsibly | Terms Apply</p>
          </div>
        </div>
      </footer>

      {/* Mobile Betting Slip Button */}
      <div className="fixed bottom-4 right-4 z-50 lg:hidden">
        <Button className="h-14 w-14 rounded-full bg-green-600 p-0 text-white shadow-lg hover:bg-green-700">
          <div className="flex flex-col items-center justify-center">
            <span className="text-xs">Slip</span>
            <span className="text-lg font-bold">0</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
