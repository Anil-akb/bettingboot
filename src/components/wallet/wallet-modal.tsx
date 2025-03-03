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
import { cn } from "@/lib/utils";

interface WalletOption {
  icon: React.ReactNode;
  label: string;
  component: React.ReactNode;
}

interface WalletModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

export function WalletModal({ isOpen, onClose, className }: WalletModalProps) {
  const [activeTab, setActiveTab] = useState("Deposit");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const walletOptions: WalletOption[] = [
    {
      icon: <CreditCard className="h-5 w-5" />,
      label: "Deposit",
      component: (
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Deposit Funds</h3>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2">
                Choose Payment Method
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-gray-700 hover:bg-gray-600">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Credit Card
                </Button>
                <Button className="bg-gray-700 hover:bg-gray-600">
                  <PiggyBank className="h-4 w-4 mr-2" />
                  Bank Transfer
                </Button>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2">Enter Amount</h4>
              <input
                type="number"
                placeholder="Amount"
                className="w-full p-2 bg-gray-700 rounded-lg text-white"
              />
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Deposit Now
            </Button>
          </div>
        </div>
      ),
    },
    {
      icon: <ArrowDownToLine className="h-5 w-5" />,
      label: "Withdraw",
      component: (
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Withdraw Funds</h3>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2">Withdrawal Method</h4>
              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-gray-700 hover:bg-gray-600">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Credit Card
                </Button>
                <Button className="bg-gray-700 hover:bg-gray-600">
                  <PiggyBank className="h-4 w-4 mr-2" />
                  Bank Transfer
                </Button>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2">Enter Amount</h4>
              <input
                type="number"
                placeholder="Amount"
                className="w-full p-2 bg-gray-700 rounded-lg text-white"
              />
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Request Withdrawal
            </Button>
          </div>
        </div>
      ),
    },
    {
      icon: <History className="h-5 w-5" />,
      label: "Bet History",
      component: (
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Betting History</h3>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2">Recent Bets</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Arsenal vs Chelsea</span>
                  <span className="text-green-500">+$50.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Man Utd vs Liverpool</span>
                  <span className="text-red-500">-$20.00</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              View Full History
            </Button>
          </div>
        </div>
      ),
    },
    {
      icon: <Gift className="h-5 w-5" />,
      label: "Bonuses",
      component: (
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Available Bonuses</h3>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2">Welcome Bonus</h4>
              <p className="text-sm text-gray-400">
                Get a 100% bonus on your first deposit up to $500.
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2">Referral Bonus</h4>
              <p className="text-sm text-gray-400">
                Earn $50 for every friend you refer.
              </p>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Claim Bonus
            </Button>
          </div>
        </div>
      ),
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Messages",
      component: (
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Messages</h3>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2">New Message</h4>
              <p className="text-sm text-gray-400">
                You have a new message from support.
              </p>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              View All Messages
            </Button>
          </div>
        </div>
      ),
    },
    {
      icon: <PiggyBank className="h-5 w-5" />,
      label: "Cashback",
      component: (
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Cashback Offers</h3>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2">Weekly Cashback</h4>
              <p className="text-sm text-gray-400">
                Get 10% cashback on all losses this week.
              </p>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Claim Cashback
            </Button>
          </div>
        </div>
      ),
    },
    {
      icon: <DollarSign className="h-5 w-5" />,
      label: "Cashout",
      component: (
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Cashout Options</h3>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2">Partial Cashout</h4>
              <p className="text-sm text-gray-400">
                Cashout a portion of your bet.
              </p>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Request Cashout
            </Button>
          </div>
        </div>
      ),
    },
    {
      icon: <LogOut className="h-5 w-5" />,
      label: "Logout",
      component: (
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Logout</h3>
          <p className="text-sm text-gray-400 mb-4">
            Are you sure you want to logout?
          </p>
          <Button className="w-full bg-red-600 hover:bg-red-700">
            Confirm Logout
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn("gap-2 text-gray-400 hover:text-white", className)}
        >
          <Wallet className="h-5 w-5" />
          <span className="hidden md:inline">$0.00</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[990px] bg-[#131722] text-white p-0 w-full h-full sm:h-[600px]">
        <div className="flex flex-col sm:flex-row h-full sm:h-[400px]">
          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center justify-between p-4 border-b border-gray-700">
            <DialogTitle>Wallet Options</DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-400 mr-8 border border-gray-700"
            >
              {activeTab} ▼
            </Button>
          </div>

          {/* Left Sidebar */}
          <div
            className={cn(
              "w-full sm:w-64 border-r border-gray-700",
              "sm:block",
              isSidebarOpen ? "block" : "hidden"
            )}
          >
            <DialogHeader className="p-4 border-b border-gray-700 hidden sm:block">
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
                  onClick={() => {
                    setActiveTab(option.label);
                    setIsSidebarOpen(false);
                  }}
                >
                  {option.icon}
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div
            className={cn(
              "flex-1",
              isSidebarOpen ? "hidden sm:block" : "block"
            )}
          >
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
