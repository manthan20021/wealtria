import { BookA, NotebookText, Pencil, PencilOff, UserStar } from "lucide-react";
import QuickActionCard from "./QuickActionCard";
import { Card } from "@/components/ui/card";

export default function QuickActions() {
  const QuickActionsData = [
    {
      id: 0,
      title: "Edit Landing Page",
      subtitle: "Modify content only",
      icon: Pencil,
      url: "/admin/update-landing",
    },
    {
      id: 1,
      title: "Edit Services Page",
      subtitle: "Modify content only",
      icon: PencilOff,
      url: "/admin/update-services",
    },
    {
      id: 2,
      title: "Write About You",
      subtitle: "Modify content only",
      icon: BookA,
      url: "/admin/update-about",
    },
    {
      id: 3,
      title: "Write Blog",
      subtitle: "Write your own blog",
      icon: NotebookText,
      url: "/admin/update-blog",
    },
    {
      id: 4,
      title: "Manage Testimonials",
      subtitle: "Modify content only",
      icon: UserStar,
      url: "/admin/update-testimonials",
    },
  ];

  return (
    <div className="w-full sm:w-[320px] lg:w-[260px] mt-10 lg:mt-0 rounded-md p-4 bg-card flex flex-col">
      <h1 className="text-lg sm:text-xl font-bold">Quick Actions</h1>
      <p className="text-sm text-muted-foreground mb-4">
        Manage your website quickly
      </p>

      {QuickActionsData.map((data, index) => (
        <a key={index} href={data.url}>
          <Card className="w-full rounded-md mt-4 p-4 flex items-center justify-between hover:shadow-md transition-shadow">
            <data.icon className="w-5 h-5" />
            <QuickActionCard ActionData={data} />
          </Card>
        </a>
      ))}
    </div>
  );
}
