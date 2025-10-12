import { UserPieChart } from "@/components/Application/admin/UserPieChart";
import { UserTrackingChart } from "@/components/Application/admin/UserTrackingChart";


export default function Charts(){
    return(
        <div className="w-full mt-5 ">
                <UserTrackingChart/>
                <UserPieChart/>
        </div> 
    )
}