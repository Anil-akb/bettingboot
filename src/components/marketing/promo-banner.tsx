"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Gift, Users, Target, ChevronRight } from "lucide-react";

interface PromoBannerProps {
  title: string;
  description: string;
  type: "welcome" | "refer" | "acca";
}

const iconMap = {
  welcome: Gift,
  refer: Users,
  acca: Target,
};

export default function PromoBanner({
  title,
  description,
  type,
}: PromoBannerProps) {
  const Icon = iconMap[type];

  return (
    <Card className="bg-[#1E2330] border-gray-700 hover:border-green-500 transition-colors group">
      <CardContent className="p-4 flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-green-500" />
          </div>
        </div>
        <div className="flex-1 min-w-0 space-y-2">
          <h3 className="text-lg font-semibold text-white group-hover:text-green-500 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-400">{description}</p>
          <div className="text-green-500 hover:text-green-400 pt-2 flex items-center gap-1 cursor-pointer text-xs">
            See More
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
