import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Gift,
  Users,
  Percent,
  Trophy,
  Calendar,
  LucideIcon,
} from "lucide-react";

const promotions = {
  sports: [
    {
      id: 1,
      title: "Welcome Bonus",
      description: "Get up to 100% bonus on your first deposit",
      icon: Gift,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      id: 2,
      title: "Acca Boost",
      description: "Up to 50% bonus on winning accumulators",
      icon: Percent,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: 3,
      title: "Refer a Friend",
      description: "Get KSh 500 for each referral",
      icon: Users,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ],
  casino: [
    {
      id: 4,
      title: "Casino Welcome Pack",
      description: "Get up to KSh 150,000 + 150 Free Spins",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      id: 5,
      title: "Weekly Cashback",
      description: "Get 10% cashback up to KSh 10,000 every week",
      icon: Calendar,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
  ],
};

export default function PromotionsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-white mb-4">Promotions</h1>

      <Tabs defaultValue="sports" className="w-full">
        <TabsList className="bg-gray-800 w-full justify-start mb-6">
          <TabsTrigger
            value="sports"
            className="data-[state=active]:bg-green-600 text-white data-[state=active]:text-white"
          >
            Sports
          </TabsTrigger>
          <TabsTrigger
            value="casino"
            className="data-[state=active]:bg-green-600 text-white data-[state=active]:text-white"
          >
            Casino
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sports">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {promotions.sports.map((promo) => (
              <PromotionCard key={promo.id} {...promo} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="casino">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {promotions.casino.map((promo) => (
              <PromotionCard key={promo.id} {...promo} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface PromotionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

function PromotionCard({
  title,
  description,
  icon: Icon,
  color,
  bgColor,
}: PromotionCardProps) {
  return (
    <Card className="bg-[#1E2330] border-gray-700 hover:border-green-500 transition-all duration-200 group">
      <CardContent className="p-6">
        <div
          className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center mb-4`}
        >
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
        <h3 className="text-lg font-semibold text-white group-hover:text-green-500 transition-colors mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <div className="text-green-500 hover:text-green-400 flex items-center gap-1 cursor-pointer text-sm">
          Learn More
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
