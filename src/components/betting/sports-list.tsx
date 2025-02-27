import { Button } from "@/components/ui/button";
import {
  ClubIcon as Football,
  ShoppingBasketIcon as Basketball,
  TurtleIcon as Tennis,
  BirdIcon as Cricket,
  Dices,
  Trophy,
  Gamepad2,
} from "lucide-react";

const sports = [
  { id: "football", name: "Football", icon: <Football className="h-5 w-5" /> },
  {
    id: "basketball",
    name: "Basketball",
    icon: <Basketball className="h-5 w-5" />,
  },
  { id: "tennis", name: "Tennis", icon: <Tennis className="h-5 w-5" /> },
  { id: "cricket", name: "Cricket", icon: <Cricket className="h-5 w-5" /> },
  { id: "casino", name: "Casino", icon: <Dices className="h-5 w-5" /> },
  { id: "virtual", name: "Virtual", icon: <Gamepad2 className="h-5 w-5" /> },
  {
    id: "promotions",
    name: "Promotions",
    icon: <Trophy className="h-5 w-5" />,
  },
];

export default function SportsList() {
  return (
    <div className="flex overflow-x-auto pb-2 -mx-4 px-4 space-x-2 md:hidden">
      {sports.map((sport) => (
        <Button
          key={sport.id}
          variant="outline"
          className="flex-shrink-0 flex flex-col items-center py-2 h-auto"
        >
          {sport.icon}
          <span className="mt-1 text-xs">{sport.name}</span>
        </Button>
      ))}
    </div>
  );
}
