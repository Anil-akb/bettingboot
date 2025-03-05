import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SignInPage({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "border border-gray-800 bg-[#131722] text-white p-6 rounded-md",
        className
      )}
    >
      {/* <h2 className="text-2xl font-bold mb-4">Sign In</h2> */}
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Email
          </label>
          <Input
            type="email"
            placeholder="Enter your email"
            className="h-10 border-gray-700 bg-gray-800 text-sm text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Password
          </label>
          <Input
            type="password"
            placeholder="Enter your password"
            className="h-10 border-gray-700 bg-gray-800 text-sm text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-green-500 cursor-pointer hover:bg-green-600 text-white font-medium py-2 rounded-md"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}
