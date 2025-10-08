import CountOverviw from "./CountOverviw";
import QuickActions from "./QuickActions";

export default function adminDashboard() {
  return (
    <div className=" pt-6 w-[screen-255px] flex sm:justify-between flex-col sm:flex-row items-center">
           <CountOverviw/>
           <QuickActions/>
    </div>
  )
}
