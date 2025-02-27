"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Wallet,
  CreditCard,
  ArrowDownToLine,
  History,
  Gift,
  Mail,
  PiggyBank,
  DollarSign,
  LogOut,
} from "lucide-react";

interface WalletOption {
  icon: React.ReactNode;
  label: string;
  component: React.ReactNode;
}

export function WalletModal() {
  const [activeTab, setActiveTab] = useState("Deposit");

  const walletOptions: WalletOption[] = [
    {
      icon: <CreditCard className="h-5 w-5" />,
      label: "Deposit",
      component: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Deposit Funds</h3>
          {/* Add your deposit form/content here */}
          <p>Deposit content goes here...</p>
        </div>
      ),
    },
    {
      icon: <ArrowDownToLine className="h-5 w-5" />,
      label: "Withdraw",
      component: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Withdraw Funds</h3>
          <p>Withdraw content goes here...</p>
        </div>
      ),
    },
    {
      icon: <History className="h-5 w-5" />,
      label: "Bet History",
      component: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Betting History</h3>
          <p>Betting history content goes here...</p>
        </div>
      ),
    },
    {
      icon: <Gift className="h-5 w-5" />,
      label: "Bonuses",
      component: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Available Bonuses</h3>
          <p>Bonuses content goes here...</p>
        </div>
      ),
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Messages",
      component: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Messages</h3>
          <p>Messages content goes here...</p>
        </div>
      ),
    },
    {
      icon: <PiggyBank className="h-5 w-5" />,
      label: "Cashback",
      component: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Cashback Offers</h3>
          <p>Cashback content goes here...</p>
        </div>
      ),
    },
    {
      icon: <DollarSign className="h-5 w-5" />,
      label: "Cashout",
      component: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Cashout Options</h3>
          <p>Cashout content goes here...</p>
        </div>
      ),
    },
    {
      icon: <LogOut className="h-5 w-5" />,
      label: "Logout",
      component: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Logout</h3>
          <p>Are you sure you want to logout?</p>
        </div>
      ),
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 text-gray-400 hover:text-white"
        >
          <Wallet className="h-5 w-5" />
          <span className="hidden md:inline">$0.00</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[990px] bg-[#131722] text-white p-0">
        <div className="flex h-[600px]">
          {/* Left Sidebar */}
          <div className="w-64 border-r border-gray-700">
            <DialogHeader className="p-4 border-b border-gray-700">
              <DialogTitle>Wallet Options</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col">
              {walletOptions.map((option) => (
                <Button
                  key={option.label}
                  variant="ghost"
                  className={`flex items-center gap-3 justify-start px-4 py-3 h-12 rounded-none ${
                    activeTab === option.label
                      ? "bg-gray-800 text-green-500"
                      : "hover:bg-gray-800 hover:text-green-500"
                  }`}
                  onClick={() => setActiveTab(option.label)}
                >
                  {option.icon}
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1">
            <div className="h-full">
              {
                walletOptions.find((option) => option.label === activeTab)
                  ?.component
              }
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
