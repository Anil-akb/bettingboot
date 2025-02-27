"use client";

import Link from "next/link";
import { Bell, ChevronDown, Globe, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WalletModal } from "@/components/wallet/wallet-modal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-gray-800 bg-[#131722] px-4 text-white md:px-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Bantubet</h1>
        </Link>
      </div>
      <div className="hidden items-center gap-6 md:flex">
        <Link
          href="#"
          className="text-sm font-medium text-white hover:text-green-500"
        >
          Sports
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-white hover:text-green-500"
        >
          Live
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-white hover:text-green-500"
        >
          Casino
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-white hover:text-green-500"
        >
          Promotions
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden md:block">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="h-9 w-[180px] rounded-md border-gray-700 bg-gray-800 pl-9 text-sm text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>
        <WalletModal />
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white"
        >
          <Bell className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1 text-gray-400 hover:text-white"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden md:inline">EN</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-[#131722] text-white border-gray-700">
            <DropdownMenuItem className="hover:text-green-500">
              Profile Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:text-green-500">
              Account Security
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="outline"
          size="sm"
          className="hidden border-green-600 bg-transparent text-green-500 hover:bg-green-600 hover:text-white md:inline-flex"
        >
          Login
        </Button>
        <Button
          size="sm"
          className="hidden bg-green-600 text-white hover:bg-green-700 md:inline-flex"
        >
          Register
        </Button>
      </div>
    </header>
  );
}
