import { BadgeAlert } from "lucide-react";
import { IssuesCard } from "./IssuesCard";

export function IssuesSection() {
  return (
    <div className="flex flex-col gap-2 pb-4">
      {/* Issues heading */}
      <div className="flex gap-2 px-3 pl-5">
        <div className="flex  py-0.5">
          <BadgeAlert size={16} strokeWidth={2.5} className=" text-gray-500" />
        </div>
        <h3 className="font-medium text-sm text-gray-900">Issues</h3>
      </div>
      <div className="flex flex-col px-3 gap-3 ">
        <IssuesCard />
        <IssuesCard />
        <IssuesCard />
      </div>
    </div>
  );
}
