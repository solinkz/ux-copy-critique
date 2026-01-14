import {
  ArrowDownToDot,
  Lightbulb,
  TextSelect,
  Check,
  Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RewriteSectionProps {
  rewrite: {
    suggested: string;
    reasoning: string;
  };
}

export function RewriteSection({ rewrite }: RewriteSectionProps) {
  // State to manage the copied status
  const [isCopied, setIsCopied] = useState(false);

  // Function to handle copying text to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rewrite.suggested);
      setIsCopied(true);

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex flex-col gap-2 pb-4">
      {/* Issues heading */}
      <div className="flex gap-2 px-3 pl-5">
        <div className="flex  py-0.5">
          <TextSelect size={16} strokeWidth={2.5} className=" text-gray-500" />
        </div>
        <h3 className="font-medium text-sm text-gray-900">
          Rewrite and Improvements
        </h3>
      </div>
      <div className="flex flex-col px-3 gap-3">
        <div className="flex flex-col px-2 py-2 border border-gray-100 bg-white rounded-lg gap-3 relative">
          <div className="p-0 absolute top-0 right-0">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Copy to clipboard"
                  className="rounded-full cursor-pointer hover:bg-slate-100 transition-colors"
                  onClick={handleCopy}
                >
                  {/* Show Check icon if copied, otherwise show Copy icon */}
                  {isCopied ? (
                    <Check className="text-green-500" />
                  ) : (
                    <Copy className="text-gray-500" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {/* Dynamically update tooltip text based on state */}
                <p>{isCopied ? "Copied!" : "Copy suggestion"}</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex gap-2">
            <div className="flex  py-0.5">
              <ArrowDownToDot
                size={16}
                strokeWidth={2.5}
                className=" text-gray-500"
              />
            </div>
            <div>
              <h3 className="font-medium text-sm text-gray-900">Suggestions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {rewrite.suggested}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex  py-0.5">
              <Lightbulb
                size={16}
                strokeWidth={2.5}
                className=" text-gray-500"
              />
            </div>
            <div>
              <h3 className="font-medium text-sm text-gray-900">Reasoning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {rewrite.reasoning}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
