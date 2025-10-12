import Link from "next/link";
import Charts from "./Charts";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

export default function CountOverviw() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Stats cards */}
      <Card className="w-full bg-transparent border-transparent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3].map((_, index) => (
          <Link key={index} href="">
            <Card className="w-full rounded-md p-4 hover:shadow-md transition-shadow">
              <CardTitle className="text-base sm:text-lg font-semibold">
                Total Users
              </CardTitle>
              <CardContent className="text-2xl sm:text-3xl font-bold">
                2042
              </CardContent>
              <CardFooter className="text-sm text-[#22c55e]">+10%</CardFooter>
            </Card>
          </Link>
        ))}
      </Card>

      {/* Charts Section */}
        <Charts />
      
    </div>
  );
}
