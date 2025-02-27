import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Star } from "lucide-react";

interface MatchCardProps {
  league: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  odds: {
    home: string;
    draw?: string;
    away: string;
  };
  featured?: boolean;
  type?: string;
}

export default function MatchCard({
  league,
  homeTeam,
  awayTeam,
  time,
  odds,
  featured,
  type,
}: MatchCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-secondary/50 p-3 flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">{league}</p>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <Clock className="h-3 w-3 mr-1" />
              <span>{time}</span>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Star className="h-4 w-4" />
            <span className="sr-only">Add to favorites</span>
          </Button>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm">
              <p className="font-medium">{homeTeam}</p>
              <p className="font-medium mt-1">{awayTeam}</p>
            </div>
            <div className="flex space-x-2">
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant="outline"
                  className="h-10 px-3 font-medium hover:bg-primary hover:text-primary-foreground"
                >
                  {odds.home}
                </Button>
                <Button
                  variant="outline"
                  className="h-10 px-3 font-medium hover:bg-primary hover:text-primary-foreground"
                >
                  {odds.draw}
                </Button>
                <Button
                  variant="outline"
                  className="h-10 px-3 font-medium hover:bg-primary hover:text-primary-foreground"
                >
                  {odds.away}
                </Button>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-full text-primary">
            +25 more markets
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
