import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ChevronRight } from "lucide-react";

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
          <Badge variant="destructive" className="mr-2">
            LIVE
          </Badge>
          Live Matches
        </CardTitle>
        <Button variant="ghost" size="sm" className="text-primary">
          View All <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {liveMatches.map((match) => (
            <div key={match.id} className="border rounded-md overflow-hidden">
              <div className="bg-secondary/50 p-3 flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">{match.league}</p>
                  <div className="flex items-center text-xs text-red-500 mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{match.minute}'</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">
                    {match.homeScore} - {match.awayScore}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm">
                    <p className="font-medium">{match.homeTeam}</p>
                    <p className="font-medium mt-1">{match.awayTeam}</p>
                  </div>
                  <div className="flex space-x-2">
                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        variant="outline"
                        className="h-10 px-3 font-medium hover:bg-primary hover:text-primary-foreground"
                      >
                        {match.homeOdds.toFixed(2)}
                      </Button>
                      <Button
                        variant="outline"
                        className="h-10 px-3 font-medium hover:bg-primary hover:text-primary-foreground"
                      >
                        {match.drawOdds.toFixed(2)}
                      </Button>
                      <Button
                        variant="outline"
                        className="h-10 px-3 font-medium hover:bg-primary hover:text-primary-foreground"
                      >
                        {match.awayOdds.toFixed(2)}
                      </Button>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-primary"
                >
                  +42 more markets
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
