import Link from "next/link";
import Charts from "./Charts";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";



export default function CountOverviw(){
    return(
        <div>
            <div className="sm:w-[803.19px] w-[300px] grid sm:grid-cols-3 grid-cols-1 gap-5">
            <Link href="">
            <Card className="sm:w-[251.73px]  w-full rounded-md p-4">
                 <CardTitle className="text-4 font-semibold">Total Users</CardTitle>
                 <CardContent className="text-[30px] font-bold">2042</CardContent>
                 <CardFooter className="text-[14px] text-[#22c55e]">10%</CardFooter>
            </Card>
            </Link>

            <Link href="">
           <Card className="sm:w-[251.73px]  w-full rounded-md p-4 ">
                 <CardTitle className="text-4 font-semibold">Total Users</CardTitle>
                 <CardContent className="text-[30px] font-bold">2042</CardContent>
                 <CardFooter className="text-[14px] text-[#22c55e]"><span >10%</span></CardFooter>
            </Card>
            </Link>

            <Link href="">
            <Card className="sm:w-[251.73px]  w-full rounded-md p-4 ">
                 <CardTitle className="text-4 font-semibold">Total Users</CardTitle>
                 <CardContent className="text-[30px] font-bold">2042</CardContent>
                 <CardFooter className="text-[14px] text-[#22c55e]"><span >10%</span></CardFooter>
            </Card>
            </Link>

        </div>

        <Charts/>
        </div>
    )
}