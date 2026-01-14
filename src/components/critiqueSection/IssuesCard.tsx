import { Badge } from "@/components/ui/badge";
import { BadgeHelp } from "lucide-react";

interface IssuesCardProps {
  issue: {
    problem: string;
    explanation: string;
    principle: string;
  };
}

export function IssuesCard({ issue }: IssuesCardProps) {
  return (
    <div className="flex flex-col px-3 gap-3 border border-gray-100 bg-white p-2 py-3 rounded-lg">
      <div>
        <div className="flex justify-between items-start gap-3">
          <div className="flex gap-2.5 items-start">
            <span className="flex h-1.5 w-1.5 translate-y-2 rounded-full ring-1 ring-sky-500 bg-sky-500/20" />
            <div className="flex flex-col gap-1 leading-none">
              <h3 className="font-medium text-sm text-gray-900">
                {issue.problem}
              </h3>
              <p className="font-normal text-xs text-muted-foreground mr-1">
                {issue.explanation}
              </p>
            </div>
          </div>
          <p className="px-1.5 py-0.5 rounded-md bg-gray-100 border border-gray-200 text-[10px] text-gray-500 font-medium whitespace-nowrap">
            {issue.principle}
          </p>
        </div>
      </div>
    </div>
  );
}