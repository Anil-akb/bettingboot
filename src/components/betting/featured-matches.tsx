import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MatchCard from "./match-card";

const todayMatches = [
  {
    id: "1",
    league: "Premier League",
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
    time: "19:45",
    date: "Today",
    homeOdds: 2.1,
    drawOdds: 3.4,
    awayOdds: 3.2,
  },
  {
    id: "2",
    league: "La Liga",
    homeTeam: "Barcelona",
    awayTeam: "Real Madrid",
    time: "20:00",
    date: "Today",
    homeOdds: 1.9,
    drawOdds: 3.5,
    awayOdds: 3.8,
  },
  {
    id: "3",
    league: "Serie A",
    homeTeam: "Juventus",
    awayTeam: "Inter Milan",
    time: "20:45",
    date: "Today",
    homeOdds: 2.3,
    drawOdds: 3.2,
    awayOdds: 2.9,
  },
];

const tomorrowMatches = [
  {
    id: "4",
    league: "Bundesliga",
    homeTeam: "Bayern Munich",
    awayTeam: "Dortmund",
    time: "18:30",
    date: "Tomorrow",
    homeOdds: 1.6,
    drawOdds: 4.0,
    awayOdds: 4.5,
  },
  {
    id: "5",
    league: "Ligue 1",
    homeTeam: "PSG",
    awayTeam: "Marseille",
    time: "20:00",
    date: "Tomorrow",
    homeOdds: 1.4,
    drawOdds: 4.2,
    awayOdds: 6.5,
  },
  {
    id: "6",
    league: "Premier League",
    homeTeam: "Liverpool",
    awayTeam: "Man City",
    time: "16:30",
    date: "Tomorrow",
    homeOdds: 2.7,
    drawOdds: 3.3,
    awayOdds: 2.4,
  },
];

export default function FeaturedMatches() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-white font-bold">Featured Matches</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <Tabs defaultValue="today" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="today" className="text-white font-bold">
              Today
            </TabsTrigger>
            <TabsTrigger value="tomorrow" className="text-white font-bold">
              Tomorrow
            </TabsTrigger>
          </TabsList>
          <TabsContent value="today" className="mt-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {todayMatches.map((match, index) => (
                <MatchCard
                  key={match.id}
                  league={match.league}
                  homeTeam={match.homeTeam}
                  awayTeam={match.awayTeam}
                  time={match.time}
                  odds={{
                    home: match.homeOdds.toString(),
                    draw: match.drawOdds.toString(),
                    away: match.awayOdds.toString(),
                  }}
                  index={index}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="tomorrow" className="mt-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {tomorrowMatches.map((match, index) => (
                <MatchCard
                  key={match.id}
                  league={match.league}
                  homeTeam={match.homeTeam}
                  awayTeam={match.awayTeam}
                  time={match.time}
                  odds={{
                    home: match.homeOdds.toString(),
                    draw: match.drawOdds.toString(),
                    away: match.awayOdds.toString(),
                  }}
                  index={index}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
