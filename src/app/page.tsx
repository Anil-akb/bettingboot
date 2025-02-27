import Image from "next/image";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PromoBanner from "@/components/marketing/promo-banner";
import LiveBetting from "@/components/betting/live-betting";
import FeaturedMatches from "@/components/betting/featured-matches";
import MainLayout from "@/components/layout/main-layout";

export default function Home() {
  return (
    <MainLayout>
      <main className="flex-1 overflow-auto p-4">
        {/* Hero Banner */}
        <div className="relative h-[200px] w-full overflow-hidden md:h-[300px]">
          <Image
            src="/placeholder.svg?height=300&width=1200"
            alt="Welcome Bonus"
            width={1200}
            height={300}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-r from-black/70 to-transparent p-6">
            <h1 className="mb-2 text-2xl font-bold text-white md:text-4xl">
              Welcome Bonus
            </h1>
            <p className="mb-4 max-w-md text-sm text-gray-200 md:text-base">
              Get up to 100% bonus on your first deposit!
            </p>
            <Button className="bg-green-600 text-white hover:bg-green-700">
              Claim Now
            </Button>
          </div>
        </div>

        {/* Promo Banners */}
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
          <PromoBanner
            type="welcome"
            title="Welcome Bonus"
            description="Get up to 100% bonus on your first deposit"
          />
          <PromoBanner
            type="refer"
            title="Refer a Friend"
            description="Get KSh 500 for each referral"
          />
          <PromoBanner
            type="acca"
            title="Acca Boost"
            description="Up to 50% bonus on winning accumulators"
          />
        </div>

        {/* Betting Section */}
        <div className="space-y-4">
          <Tabs defaultValue="highlights" className="w-full">
            <div className="flex items-center justify-between">
              <TabsList className="bg-gray-800">
                <TabsTrigger
                  value="highlights"
                  className="data-[state=active]:bg-green-600 cursor-pointer text-white data-[state=active]:text-white"
                >
                  Highlights
                </TabsTrigger>
                <TabsTrigger
                  value="live"
                  className="data-[state=active]:bg-green-600 cursor-pointer text-white data-[state=active]:text-white"
                >
                  Live Now
                </TabsTrigger>
                <TabsTrigger
                  value="upcoming"
                  className="data-[state=active]:bg-green-600 cursor-pointer text-white data-[state=active]:text-white"
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
              <div className="grid gap-4">
                <LiveBetting />
                <FeaturedMatches />
              </div>
            </TabsContent>

            <TabsContent value="live" className="mt-4">
              <div className="grid gap-4">
                <LiveBetting />
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="mt-4">
              <div className="grid gap-4">
                <FeaturedMatches />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </MainLayout>
  );
}
