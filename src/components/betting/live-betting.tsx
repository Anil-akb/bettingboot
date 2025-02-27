import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import MatchCard from "./match-card";

const liveMatches = [
  {
    id: "live1",
    league: "Premier League",
    homeTeam: "Man United",
    awayTeam: "Tottenham",
    homeScore: 2,
    awayScore: 1,
    minute: 67,
    homeOdds: 1.5,
    drawOdds: 3.8,
    awayOdds: 5.2,
  },
  {
    id: "live2",
    league: "La Liga",
    homeTeam: "Atletico Madrid",
    awayTeam: "Sevilla",
    homeScore: 0,
    awayScore: 0,
    minute: 23,
    homeOdds: 1.9,
    drawOdds: 2.8,
    awayOdds: 4.5,
  },
  {
    id: "live3",
    league: "Bundesliga",
    homeTeam: "RB Leipzig",
    awayTeam: "Leverkusen",
    homeScore: 1,
    awayScore: 2,
    minute: 78,
    homeOdds: 4.2,
    drawOdds: 3.5,
    awayOdds: 1.7,
  },
];

export default function LiveBetting() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="flex items-center">
          <Badge
            variant="destructive"
            className="mr-2 bg-red-500 hover:bg-red-600"
          >
            LIVE
          </Badge>
          <span className="text-white font-bold">Live Matches</span>
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="text-green-500 hover:text-green-400"
        >
          View All <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {liveMatches.map((match, index) => (
            <MatchCard
              key={match.id}
              league={match.league}
              homeTeam={match.homeTeam}
              awayTeam={match.awayTeam}
              time={`${match.minute}'`}
              odds={{
                home: match.homeOdds.toFixed(2),
                draw: match.drawOdds.toFixed(2),
                away: match.awayOdds.toFixed(2),
              }}
              index={index}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
