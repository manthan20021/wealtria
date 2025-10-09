import { BookA, NotebookText, Pencil, PencilOff, UserStar } from "lucide-react";
import QuickActionCard from "./QuickActionCard";
import { Card } from "@/components/ui/card";

export default function QuickActions(){

    const QuickActionsData = [
        {
            id:0,
            title:"Edit Landing Page",
            subtitle: "Modify content onlly",
            icon: Pencil,
            url: "/admin/update-landing"
        },

         {
            id:1,
            title:"Edit Services Page",
            subtitle: "Modify content onlly",
            icon: PencilOff,
             url: "/admin/updte-landing"
        },

         {
            id:2,
            title:"Write About You",
            subtitle: "Modify content onlly",
            icon: BookA,
             url: "/admin/update-about"
        },

         {
            id:3,
            title:"Write Blog",
            subtitle: "write your won blog",
            icon: NotebookText,
             url: "/admin/updte-landing"
        },

         {
            id:0,
            title:"Manage Testimonials",
            subtitle: "Modify content onlly",
            icon: UserStar,
            url: "/admin/updte-landing"
        }
    ]
    return(
        <div className="sm:w-[250.6px] w-[300px] mt-11 sm:mt-0 sm:ml-6 sm:h-[890px] h-auto rounded-md p-4">
            <h1 className="text-[20px] font-bold">QuickActions</h1>
            <p className="text-[14px]">Make your websit</p>
            {
                QuickActionsData.map((data, index)=>(
                   <a key={index} href={data.url}>
                   <Card className="  w-full rounded-md mt-6 p-4 flex items-center justify-between ">
                    <data.icon/>
                    <QuickActionCard ActionData={data} />
                   </Card>
                   </a>
                ))
            }
            
            
        </div>
    )
}