import { ArrowDownToDot, Lightbulb, TextSelect } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface RewriteSectionProps {
  rewrite: {
    suggested: string;
    reasoning: string;
  };
}

export function RewriteSection({ rewrite }: RewriteSectionProps) {
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
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Submit"
              className="rounded-full cursor-pointer"
            >
              <Copy />
            </Button>
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
