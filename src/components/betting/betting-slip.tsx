"use client";

import { useState } from "react";
import { Calculator, ChevronDown, Trash2, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface BettingSlipProps {
  className?: string;
}

export function BettingSlip({ className }: BettingSlipProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [selections, setSelections] = useState<any[]>([]);
  const [stake, setStake] = useState("100");

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const potentialWin = Number.parseFloat(stake) * 2.45; // Example calculation

  return (
    <div
      className={cn(
        "w-[320px] border-l border-gray-800 bg-[#131722] text-white",
        className
      )}
    >
      <div className="flex h-12 items-center justify-between border-b border-gray-800 px-4">
        <button
          onClick={toggleOpen}
          className="flex items-center gap-1 text-sm font-medium"
        >
          Bet Slip
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              isOpen ? "rotate-180" : ""
            )}
          />
        </button>
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
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col">
          <Tabs defaultValue="single" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800 p-0">
              <TabsTrigger
                value="single"
                className="rounded-none data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                Single
              </TabsTrigger>
              <TabsTrigger
                value="multiple"
                className="rounded-none data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                Multiple
              </TabsTrigger>
              <TabsTrigger
                value="system"
                className="rounded-none data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                System
              </TabsTrigger>
            </TabsList>

            <TabsContent value="single" className="m-0">
              {selections.length > 0 ? (
                <div className="divide-y divide-gray-800">
                  {/* Example selection */}
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
                    <div className="mb-1 text-sm">Arsenal vs Chelsea</div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-green-500">Home Win</span>
                      <span className="text-sm font-medium">2.10</span>
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

                <Button className="w-full bg-green-600 hover:bg-green-700">
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
                <p className="text-xs text-gray-500">to create a system bet</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
}
