
import CountOverviw from "./CountOverviw";
import QuickActions from "./QuickActions";

export default function AdminDashboard() {
  return (
    <div className="pt-6 w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-8 px-4">
      <CountOverviw />
      <QuickActions />
    </div>
  );
}
