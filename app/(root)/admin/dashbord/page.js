
import CountOverviw from "./CountOverviw";
import QuickActions from "./QuickActions";

export default function AdminDashboard() {
  return (
      <div className=" pt-6 w-full flex sm:justify-between flex-col sm:flex-row items-center">
           <CountOverviw/>
           <QuickActions/>
    </div>
  )
}
