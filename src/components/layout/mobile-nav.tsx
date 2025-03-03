"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Trophy,
  PlayCircle,
  Gift,
  Wallet,
  Menu,
  Receipt,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BettingSlip } from "@/components/betting/betting-slip";
import { WalletModal } from "@/components/wallet/wallet-modal";

interface NavItem {
  label: string;
  icon: any;
  href?: string;
  onClick?: () => void;
  isSlip?: boolean;
  isMenu?: boolean;
}

export function MobileNav() {
  const pathname = usePathname();
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isSlipOpen, setIsSlipOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      label: "Home",
      icon: Home,
      //   isMenu: true,
      href: "/",
    },
    {
      label: "Sports",
      icon: Trophy,
      href: "/sports",
    },
    {
      label: "Live",
      icon: PlayCircle,
      href: "/live",
    },
    {
      label: "Slip",
      icon: Receipt,
      isSlip: true,
    },
    {
      label: "Wallet",
      icon: Wallet,
      onClick: () => setIsWalletOpen(true),
    },
  ];

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-800 bg-[#131722] md:hidden">
        <div className="grid grid-cols-5 p-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            if (item.isSlip) {
              return (
                <Sheet
                  key={item.label}
                  open={isSlipOpen}
                  onOpenChange={setIsSlipOpen}
                >
                  <SheetTrigger className="flex flex-col items-center gap-1 text-gray-400">
                    <Icon className="h-6 w-6" />
                    <span className="text-xs">{item.label}</span>
                  </SheetTrigger>
                  <SheetContent
                    side="bottom"
                    className="h-[80vh] border-t border-gray-800 bg-[#131722] p-0 bottom-[64px]"
                  >
                    <BettingSlip className="h-full border-none" />
                  </SheetContent>
                </Sheet>
              );
            }

            if (item.isMenu) {
              return (
                <Sheet
                  key={item.label}
                  open={isMenuOpen}
                  onOpenChange={setIsMenuOpen}
                >
                  <SheetTrigger className="flex flex-col items-center gap-1 text-gray-400">
                    <Icon className="h-6 w-6" />
                    <span className="text-xs">{item.label}</span>
                  </SheetTrigger>
                  <SheetContent
                    side="left"
                    className="w-[300px] p-0 border-gray-800"
                  >
                    {/* Menu Content */}
                  </SheetContent>
                </Sheet>
              );
            }

            if (item.onClick) {
              return (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="flex flex-col items-center gap-1 text-gray-400"
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-xs">{item.label}</span>
                </button>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href || "#"}
                className={cn(
                  "flex flex-col items-center gap-1",
                  pathname === item.href
                    ? "text-green-500"
                    : "text-gray-400 hover:text-white"
                )}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <WalletModal
        isOpen={isWalletOpen}
        onClose={() => setIsWalletOpen(false)}
      />

      {/* Add padding to bottom of the page to account for nav bar */}
      <div className="pb-20 md:pb-0" />
    </>
  );
}
