"use client";

import { useState } from "react";
import { Calculator, ChevronDown, ReceiptText, Trash2, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface BettingSlipProps {
  className?: string;
  isCollapsed?: boolean;
}

interface Selection {
  id: string;
  sport: string;
  match: string;
  bet: string;
  odds: number;
}

export function BettingSlip({
  className,
  isCollapsed: defaultCollapsed,
}: BettingSlipProps) {
  const [selections, setSelections] = useState<Selection[]>([]);
  const [stake, setStake] = useState("100");
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed ?? false);

  const clearSelections = () => setSelections([]);
  const potentialWin = Number.parseFloat(stake) * 2.45;

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div
      className={cn(
        "bg-[#1E2330] border-l border-gray-800 transition-all duration-300",
        isCollapsed ? "w-12" : "w-80",
        className
      )}
    >
      {isCollapsed ? (
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 text-gray-400 hover:text-white relative"
          onClick={toggleCollapse}
        >
          <ReceiptText className="h-5 w-5 cursor-pointer" />
          {selections.length > 0 && (
            <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-600 text-xs text-white flex items-center justify-center">
              {selections.length}
            </div>
          )}
        </Button>
      ) : (
        <>
          <div className="flex items-center justify-between p-2 border-b border-gray-800">
            <div className="flex items-center gap-4">
              <span className="text-sm ml-1.5 font-medium text-white">
                Bet Slip ({selections.length})
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-400 hover:text-white"
                onClick={toggleCollapse}
              >
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform duration-200 cursor-pointer",
                    isCollapsed && "rotate-180"
                  )}
                />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-400 hover:text-white"
              >
                <Calculator className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-400 hover:text-white"
                onClick={clearSelections}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div
            className={cn(
              "transition-all duration-300",
              isCollapsed ? "h-0 overflow-hidden" : "h-auto"
            )}
          >
            <div className="p-4">
              <div className="flex flex-col">
                <Tabs defaultValue="single" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-gray-800 p-0">
                    <TabsTrigger
                      value="single"
                      className="rounded-lg cursor-pointer text-white data-[state=active]:bg-green-600 data-[state=active]:text-white"
                    >
                      Single
                    </TabsTrigger>
                    <TabsTrigger
                      value="multiple"
                      className="rounded-lg cursor-pointer text-white data-[state=active]:bg-green-600 data-[state=active]:text-white"
                    >
                      Multiple
                    </TabsTrigger>
                    <TabsTrigger
                      value="system"
                      className="rounded-lg cursor-pointer text-white data-[state=active]:bg-green-600 data-[state=active]:text-white"
                    >
                      System
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="single" className="m-0">
                    {selections.length > 0 ? (
                      <div className="divide-y divide-gray-800">
                        <div className="p-3">
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-xs text-gray-400">
                              Football - EPL
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-5 w-5 text-gray-400 hover:text-white"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="mb-1 text-sm text-white">
                            Arsenal vs Chelsea
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-green-500">
                              Home Win
                            </span>
                            <span className="text-sm font-medium text-white">
                              2.10
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center p-8 text-center">
                        <p className="mb-2 text-sm text-gray-400">
                          Your bet slip is empty
                        </p>
                        <p className="text-xs text-gray-500">
                          Click on odds to add selections
                        </p>
                      </div>
                    )}

                    <div className="border-t border-gray-800 p-3">
                      <div className="mb-3">
                        <label
                          htmlFor="stake"
                          className="mb-1 block text-xs text-gray-400"
                        >
                          Stake (KSh)
                        </label>
                        <Input
                          id="stake"
                          type="number"
                          value={stake}
                          onChange={(e) => setStake(e.target.value)}
                          className="h-9 border-gray-700 bg-gray-800 text-white"
                        />
                      </div>

                      <div className="mb-3 grid grid-cols-4 gap-2">
                        {[100, 200, 500, 1000].map((amount) => (
                          <Button
                            key={amount}
                            variant="outline"
                            size="sm"
                            onClick={() => setStake(amount.toString())}
                            className="border-gray-700 bg-gray-800 text-xs text-white hover:bg-gray-700"
                          >
                            {amount}
                          </Button>
                        ))}
                      </div>

                      <div className="mb-3 flex items-center justify-between text-sm">
                        <span className="text-gray-400">Potential Win:</span>
                        <span className="font-medium text-green-500">
                          KSh {potentialWin.toFixed(2)}
                        </span>
                      </div>

                      <Button className="w-full bg-green-600 cursor-pointer hover:bg-green-700">
                        Place Bet
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="multiple" className="m-0">
                    <div className="flex flex-col items-center justify-center p-8 text-center">
                      <p className="mb-2 text-sm text-gray-400">
                        Add at least 2 selections
                      </p>
                      <p className="text-xs text-gray-500">
                        to create a multiple bet
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="system" className="m-0">
                    <div className="flex flex-col items-center justify-center p-8 text-center">
                      <p className="mb-2 text-sm text-gray-400">
                        Add at least 3 selections
                      </p>
                      <p className="text-xs text-gray-500">
                        to create a system bet
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
