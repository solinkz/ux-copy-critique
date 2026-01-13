import { Badge } from "@/components/ui/badge";
import { BadgeHelp } from "lucide-react";

export function IssuesCard() {
    return (
        <div className="flex flex-col px-2 py-2 border border-gray-100 bg-white rounded-lg gap-3">
          {/* Main issue defined */}
          <div className="flex gap-2">
            <div className="flex w-4 pl-0.5">
              <span className="text-sm font-semibold text-gray-400">1/</span>
            </div>
            <div>
              <h3 className="font-medium text-sm text-gray-900">
                Vague error description
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The phrase "is wrong" does not explain whether the issue is
                formatting, a typo, or an unsupported email address, leaving the
                user unsure how to correct it
              </p>
            </div>
          </div>
          {/* Principles */}
          <Badge variant="secondary" className="pl-1 rounded-md">
            <BadgeHelp strokeWidth={2.5} className="text-primary" />
            <span className="text-muted-foreground">
              Clarity and specificity Principle
            </span>
          </Badge>
        </div>
    )
}