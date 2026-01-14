import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LetterText, Component, RefreshCw, Pencil } from "lucide-react";

interface CritiqueHeaderProps {
  uiCopy: string;
  elementType: string;
}

export function CritiqueHeader({ uiCopy, elementType }: CritiqueHeaderProps) {
  return (
    <div className="sticky top-0 z-10 bg-gradient-to-b from-gray-50 via-gray-50/90 to-transparent p-3 pb-8 -mb-4 flex items-center justify-between">
      {/* For the prompt idea */}

      <div className="flex gap-3">
        <div className="flex p-2 pr-3 gap-2 items-center bg-white rounded-lg border border-gray-100 min-w-[260px]">
          <LetterText size={16} strokeWidth={2.5} className="text-blue-600" />

          <div className="flex flex-col">
            <p className="text-xs text-gray-400">Original copy</p>
            <p className="text-xs line-clamp-1">
              {uiCopy || "No copy provided"}
            </p>
          </div>
        </div>
        <div className="flex p-2 pr-3 gap-2 items-center bg-white rounded-lg border border-gray-100">
          <Component size={16} strokeWidth={2.5} className="text-purple-600" />

          <div className="flex flex-col">
            <p className="text-xs text-gray-400">Element</p>
            <p className="text-xs line-clamp-1">
              {elementType || "Not selected"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        {/* Reload button with tooltip */}
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant="secondary"
              size="icon-sm"
              aria-label="Regenerate critique"
              className="rounded-full border border-gray-200 opacity-50 cursor-not-allowed"
              disabled
            >
              <RefreshCw />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Regenerate critique (Coming soon)</p>
          </TooltipContent>
        </Tooltip>

        {/* Edit button with tooltip */}
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant="secondary"
              size="icon-sm"
              aria-label="Edit original copy"
              className="rounded-full border border-gray-200 opacity-50 cursor-not-allowed"
              disabled
            >
              <Pencil />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit original copy (Coming soon)</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
