import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { BadgeHelp } from "lucide-react";

interface IssuesCardProps {
  issue: {
    problem: string;
    explanation: string;
    principle: string;
  };
  index: number;
}

export function IssuesCard({ issue, index }: IssuesCardProps) {
  return (
    <div className="flex flex-col px-2 py-2 border border-gray-100 bg-white rounded-lg gap-3">
      {/* Main issue defined */}
      <div className="flex gap-2">
        <div className="flex w-4 pl-0.5">
          <span className="text-sm font-semibold text-gray-400">
            {index + 1}/
          </span>
        </div>
        <div>
          <h3 className="font-medium text-sm text-gray-900">{issue.problem}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {issue.explanation}
          </p>
        </div>
      </div>
      {/* Principles */}
      <div className="text-left">
        <Tooltip>
          <TooltipTrigger>
            <Badge variant="secondary" className="pl-1 rounded-md">
              <BadgeHelp strokeWidth={2.5} className="text-primary" />
              <span className="text-muted-foreground">{issue.principle}</span>
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>Priciple used</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
