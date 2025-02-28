import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MatchCard from "@/components/betting/match-card";
import { ChevronRight, Star } from "lucide-react";

interface BettingSectionProps {
  defaultTab?: string;
}

export function BettingSection({
  defaultTab = "highlights",
}: BettingSectionProps) {
  return (
    <Tabs defaultValue={defaultTab} className="w-full">
      <div className="flex items-center justify-between">
        <TabsList className="bg-gray-800">
          <TabsTrigger
            value="highlights"
            className="data-[state=active]:bg-green-600 text-white data-[state=active]:text-white"
          >
            Highlights
          </TabsTrigger>
          <TabsTrigger
            value="live"
            className="data-[state=active]:bg-green-600 text-white data-[state=active]:text-white"
          >
            Live Now
          </TabsTrigger>
          <TabsTrigger
            value="upcoming"
            className="data-[state=active]:bg-green-600 text-white data-[state=active]:text-white"
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
          <p className="text-gray-400">Check back soon for upcoming matches</p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
