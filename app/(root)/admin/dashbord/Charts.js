import { UserPieChart } from "@/components/Application/admin/UserPieChart";
import { UserTrackingChart } from "@/components/Application/admin/UserTrackingChart";


export default function Charts(){
    return(
        <div className="sm:w-[803.2px] w-[300px] sm:mb-0  mb-30 mt-6">
            <div className="h-[369.6px]  w-full">
                <UserTrackingChart/>
            </div>
            <div className="h-[285.6px] mt-20  w-full">
                <UserPieChart/>
            </div>
        </div>
    )
}