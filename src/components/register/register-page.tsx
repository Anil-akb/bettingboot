import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function RegisterPage({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "border border-gray-800 bg-[#131722] text-white p-6  rounded-lg shadow-lg max-w-md mx-auto",
        className
      )}
    >
      {/* <h2 className="text-2xl font-bold text-center mb-6">
        Create Your Account
      </h2> */}
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Country Code
            </label>
            <Input
              type="text"
              placeholder="254"
              className="h-10 border-gray-700 bg-gray-800 text-sm w-full text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Phone Number
            </label>
            <Input
              type="text"
              placeholder="Enter your phone number"
              className="h-10 border-gray-700 bg-gray-800 text-sm w-full text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Password
          </label>
          <Input
            type="password"
            placeholder="Enter your password"
            className="h-10 border-gray-700 bg-gray-800 text-sm w-full text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Confirm Password
          </label>
          <Input
            type="password"
            placeholder="Confirm your password"
            className="h-10 border-gray-700 bg-gray-800 text-sm w-full text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Loyalty Code (optional)
          </label>
          <Input
            type="text"
            placeholder="Enter your loyalty code"
            className="h-10 border-gray-700 bg-gray-800 text-sm w-full text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="ageCheck"
            className="h-4 w-4 text-green-500 border-gray-700 bg-gray-800 focus:ring-green-500"
          />
          <label htmlFor="ageCheck" className="ml-2 text-sm text-gray-400">
            I am 18 years old or older
          </label>
        </div>
        <Button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md transition-colors duration-200 cursor-pointer"
        >
          Register
        </Button>
      </form>
    </div>
  );
}
