import Link from "next/link";
import Charts from "./Charts";


export default function CountOverviw(){
    return(
        <div>

            <div className="sm:w-[803.19px] w-screen grid sm:grid-cols-3 grid-cols-1 gap-5">
            <Link href="">
            <div className="sm:w-[251.73px]  w-full rounded-md p-4 h-[121.6px] bg-gray-100 ">
                <p className="text-4 font-semibold">Total Users</p>
                <h4 className="text-[30px] font-bold">2050</h4>
                <span className="text-[14px] text-[#22c55e]">10%</span>
            </div>
            </Link>

            <Link href="">
            <div className="sm:w-[251.73px] w-full rounded-md p-4 h-[121.6px] bg-gray-100 ">
                <p className="text-4 font-semibold">Active Users</p>
                <h4 className="text-[30px] font-bold">1000</h4>
                <span className="text-[14px] text-[#22c55e]">10%</span>
            </div>
            </Link>

            <Link href="">
            <div className="sm:w-[251.73px] w-full rounded-md p-4 h-[121.6px] bg-gray-100 ">
                <p className="text-4 font-semibold">Conversion Rate</p>
                <h4 className="text-[30px] font-bold">20%</h4>
                <span className="text-[14px] text-[#22c55e]">10%</span>
            </div>
            </Link>

        </div>

        <Charts/>
        </div>
    )
}