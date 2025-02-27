"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface PromoBannerProps {
  title: string;
  description: string;
  image: string;
}

const promos = [
  {
    id: "1",
    title: "Welcome Bonus",
    description: "Get 100% bonus up to 10,000 KES on your first deposit",
    image: "/placeholder.svg?height=300&width=800",
    color: "from-green-500 to-blue-600",
  },
  {
    id: "2",
    title: "Acca Boost",
    description: "Get up to 50% bonus on your accumulator bets",
    image: "/placeholder.svg?height=300&width=800",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: "3",
    title: "Refer a Friend",
    description: "Get 1,000 KES for each friend you refer",
    image: "/placeholder.svg?height=300&width=800",
    color: "from-yellow-500 to-red-600",
  },
];

export default function PromoBanner({
  title,
  description,
  image,
}: PromoBannerProps) {
  const [currentPromo, setCurrentPromo] = useState(0);

  const nextPromo = () => {
    setCurrentPromo((prev) => (prev + 1) % promos.length);
  };

  const prevPromo = () => {
    setCurrentPromo((prev) => (prev - 1 + promos.length) % promos.length);
  };

  const promo = promos[currentPromo];

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0 relative">
        <div
          className={`bg-gradient-to-r ${promo.color} h-48 md:h-64 relative`}
        >
          <div className="absolute inset-0 flex items-center justify-center text-white p-6 md:p-10">
            <div className="text-center md:text-left md:max-w-md">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {promo.title}
              </h2>
              <p className="text-sm md:text-base mb-4">{promo.description}</p>
              <Button className="bg-white text-primary hover:bg-gray-100">
                Claim Now
              </Button>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={prevPromo}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={nextPromo}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
          {promos.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full ${
                index === currentPromo ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
              onClick={() => setCurrentPromo(index)}
            >
              <span className="sr-only">Promo {index + 1}</span>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
