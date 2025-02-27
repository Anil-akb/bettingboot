import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CreditCard,
  Shield,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">BantuBet</h3>
            <p className="text-sm text-gray-300 mb-4">
              The premier sports betting platform offering a wide range of
              sports and casino games.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Sports</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/sports/football" className="hover:text-white">
                  Football
                </Link>
              </li>
              <li>
                <Link href="/sports/basketball" className="hover:text-white">
                  Basketball
                </Link>
              </li>
              <li>
                <Link href="/sports/tennis" className="hover:text-white">
                  Tennis
                </Link>
              </li>
              <li>
                <Link href="/sports/cricket" className="hover:text-white">
                  Cricket
                </Link>
              </li>
              <li>
                <Link href="/sports/rugby" className="hover:text-white">
                  Rugby
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Casino</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/casino/slots" className="hover:text-white">
                  Slots
                </Link>
              </li>
              <li>
                <Link href="/casino/table-games" className="hover:text-white">
                  Table Games
                </Link>
              </li>
              <li>
                <Link href="/casino/live-casino" className="hover:text-white">
                  Live Casino
                </Link>
              </li>
              <li>
                <Link href="/casino/jackpots" className="hover:text-white">
                  Jackpots
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Help & Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/help/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/help/terms" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/help/responsible-gaming"
                  className="hover:text-white"
                >
                  Responsible Gaming
                </Link>
              </li>
              <li>
                <Link href="/help/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} BantuBet. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-400">
                <Shield className="h-4 w-4 mr-1" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <CreditCard className="h-4 w-4 mr-1" />
                <span>Multiple Payment Methods</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
