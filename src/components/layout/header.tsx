"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronDown, Globe, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WalletModal } from "@/components/wallet/wallet-modal";
import { RegisterModal } from "@/components/register/register-modal";
import { SignInModal } from "@/components/signin/signin-modal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";

export function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    return pathname === path;
  };

  // Don't render the mobile menu until after client-side hydration
  const mobileMenu = isMounted && isSidebarOpen && (
    <nav className="absolute top-16 left-0 w-full bg-[#131722] text-white md:hidden">
      <ul className="flex flex-col items-start p-4">
        <li>
          <Link
            href="/sports"
            className={`block py-2 text-sm font-medium ${
              isActive("/sports") ? "text-green-500" : "hover:text-green-500"
            }`}
          >
            Sports
          </Link>
        </li>
        <li>
          <Link
            href="/live"
            className={`block py-2 text-sm font-medium ${
              isActive("/live") ? "text-green-500" : "hover:text-green-500"
            }`}
          >
            Live
          </Link>
        </li>
        <li>
          <Link
            href="/casino"
            className={`block py-2 text-sm font-medium ${
              isActive("/casino") ? "text-green-500" : "hover:text-green-500"
            }`}
          >
            Casino
          </Link>
        </li>
        <li>
          <Link
            href="/promotions"
            className={`block py-2 text-sm font-medium ${
              isActive("/promotions")
                ? "text-green-500"
                : "hover:text-green-500"
            }`}
          >
            Promotions
          </Link>
        </li>
      </ul>
    </nav>
  );

  return (
    <>
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-gray-800 bg-[#131722] px-4 text-white md:px-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">Bantubet</h1>
          </Link>
        </div>
        {mobileMenu}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/sports"
            className={`text-sm font-medium ${
              isActive("/sports")
                ? "text-green-500"
                : "text-white hover:text-green-500"
            }`}
          >
            Sports
          </Link>
          <Link
            href="/live"
            className={`text-sm font-medium ${
              isActive("/live")
                ? "text-green-500"
                : "text-white hover:text-green-500"
            }`}
          >
            Live
          </Link>
          <Link
            href="/casino"
            className={`text-sm font-medium ${
              isActive("/casino")
                ? "text-green-500"
                : "text-white hover:text-green-500"
            }`}
          >
            Casino
          </Link>
          <Link
            href="/promotions"
            className={`text-sm font-medium ${
              isActive("/promotions")
                ? "text-green-500"
                : "text-white hover:text-green-500"
            }`}
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
                className="h-9 w-[180px] rounded-md border-gray-700 bg-gray-800 pl-9 text-sm text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500 "
              />
            </div>
          </div>
          <WalletModal className="hidden md:flex cursor-pointer" />
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white"
          >
            <Bell className="h-5 w-5 cursor-pointer" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1 text-gray-400 hover:text-white"
          >
            <Globe className="h-4 w-4 cursor-pointer" />
            <span className="hidden md:inline">EN</span>
            <ChevronDown className="h-4 w-4 cursor-pointer" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <User className="h-5 w-5 cursor-pointer" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-[#131722] text-white border-gray-700">
              <DropdownMenuItem className="hover:text-green-500">
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:text-green-500">
                Account Security
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:text-green-500 md:hidden"
                onClick={() => setIsSignInModalOpen(true)}
              >
                Login
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:text-green-500 md:hidden"
                onClick={() => setIsRegisterModalOpen(true)}
              >
                Register
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="outline"
            size="sm"
            className="hidden border-green-600 bg-transparent cursor-pointer text-green-500 hover:bg-green-600 hover:text-white md:inline-flex"
            onClick={() => setIsSignInModalOpen(true)}
          >
            Login
          </Button>
          <Button
            size="sm"
            className="hidden bg-green-600 cursor-pointer text-white hover:bg-green-700 md:inline-flex"
            onClick={() => setIsRegisterModalOpen(true)}
          >
            Register
          </Button>
        </div>
      </header>
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
      />
    </>
  );
}
