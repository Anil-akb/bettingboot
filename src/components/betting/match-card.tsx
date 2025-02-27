import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Star, Trophy, Zap, Activity } from "lucide-react";

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
  index?: number;
}

const gradients = [
  "from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d]", // Deep blue to red to gold
  "from-[#0f0c29] via-[#302b63] to-[#24243e]", // Dark purple blend
  "from-[#23074d] to-[#cc5333]", // Purple to orange
  "from-[#200122] to-[#6f0000]", // Dark red blend
  "from-[#0f2027] via-[#203a43] to-[#2c5364]", // Ocean blue
];

export default function MatchCard({
  league,
  homeTeam,
  awayTeam,
  time,
  odds,
  featured,
  index = 0,
}: MatchCardProps) {
  const gradientClass = gradients[index % gradients.length];

  return (
    <Card
      className={`overflow-hidden bg-gradient-to-br ${gradientClass} text-white border-gray-700 hover:shadow-lg hover:shadow-gray-700/30 transition-all duration-300 relative group`}
    >
      {featured && (
        <div className="absolute top-2 right-2 z-10">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300">
            <Trophy className="h-3 w-3 mr-1" />
            Featured
          </span>
        </div>
      )}
      <CardContent className="p-0">
        <div className="bg-black/20 backdrop-blur-sm p-3 flex justify-between items-center border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-green-400" />
              <p className="text-sm font-medium text-gray-200">{league}</p>
            </div>
            <div className="flex items-center text-xs text-gray-300 mt-1">
              <Clock className="h-3 w-3 mr-1" />
              <span>{time}</span>
              {featured && (
                <span className="ml-2 flex items-center text-yellow-500">
                  <Zap className="h-3 w-3 mr-1" />
                  Hot
                </span>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-300 hover:text-yellow-500 transition-colors"
          >
            <Star className="h-4 w-4" />
            <span className="sr-only">Add to favorites</span>
          </Button>
        </div>
        <div className="p-4 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm space-y-2">
                <p className="font-medium text-white group-hover:text-green-400 transition-colors">
                  {homeTeam}
                </p>
                <p className="font-medium text-white group-hover:text-green-400 transition-colors">
                  {awayTeam}
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="grid grid-cols-3 gap-2">
                  {[odds.home, odds.draw, odds.away].map(
                    (odd, i) =>
                      odd && (
                        <Button
                          key={i}
                          variant="outline"
                          className="h-10 px-3 font-medium border-white/10 bg-white/5 text-white hover:bg-white/20 hover:text-white hover:border-green-500 transition-all duration-200"
                        >
                          {odd}
                        </Button>
                      )
                  )}
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors group"
            >
              +25 more markets
              <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
