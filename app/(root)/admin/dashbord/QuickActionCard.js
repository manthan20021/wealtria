export default function QuickActionCard({ ActionData }) {
  return (
    <div className="flex flex-col text-right ml-3">
      <h2 className="font-semibold text-sm sm:text-base">{ActionData.title}</h2>
      <span className="text-xs sm:text-sm text-[#647488]">
        {ActionData.subtitle}
      </span>
    </div>
  );
}
