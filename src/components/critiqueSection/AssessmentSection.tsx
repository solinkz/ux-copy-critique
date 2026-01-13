import { ScrollText, CheckCircle2 } from "lucide-react";

export function AssessmentSection() {
  return (
    <div className="flex flex-col gap-2 px-3 pl-5 pb-4">
      <div className="flex gap-2">
        <div className="flex  py-1">
          <ScrollText size={16} strokeWidth={2.5} className=" text-gray-500" />
        </div>
        <div>
          <h3 className="font-medium text-sm text-gray-900">Assessment</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The message identifies an error but does not clearly explain what is
            wrong or how to fix it.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-2.5">
          <CheckCircle2
            size={16}
            className=" fill-emerald-500 text-white shrink-0 mt-0.5"
          />
          <span className="text-sm text-muted-foreground">
            It correctly signals that the problem is related to the email
            address.
          </span>
        </div>
        <div className="flex items-start gap-2.5">
          <CheckCircle2
            size={16}
            className=" fill-emerald-500 text-white shrink-0 mt-0.5"
          />
          <span className="text-sm text-muted-foreground">
            The message is short and easy to scan.
          </span>
        </div>
      </div>
    </div>
  );
}
