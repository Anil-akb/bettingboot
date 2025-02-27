"use client";

import { useState } from "react";
import { Header } from "./header";
import { SportsSidebar } from "../betting/sports-sidebar";
import { BettingSlip } from "../betting/betting-slip";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#1a1e25]">
      <Header />
      <div className="flex flex-1">
        <div className="relative hidden lg:block">
          <SportsSidebar
            className={`transition-all duration-300 ${
              isSidebarCollapsed ? "w-[60px]" : "w-[240px]"
            }`}
            isCollapsed={isSidebarCollapsed}
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="absolute -right-3 top-4 h-6 w-6 rounded-full bg-[#1E2330] p-0 hover:bg-green-500/20 border border-gray-700"
          >
            {isSidebarCollapsed ? (
              <ChevronRight className="h-4 w-4 text-gray-400" />
            ) : (
              <ChevronLeft className="h-4 w-4 text-gray-400" />
            )}
          </Button>
        </div>
        <main className="flex-1 overflow-auto">{children}</main>
        <BettingSlip className="hidden lg:block" />
      </div>
    </div>
  );
}
