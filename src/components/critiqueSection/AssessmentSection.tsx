import { ScrollText, CheckCircle2 } from "lucide-react";

export function AssessmentSection() {
  return (
    <div className="flex flex-col gap-4 px-4 pb-4">
      <div className="flex items-center gap-2">
        <ScrollText className="w-5 h-5 text-gray-500" />
        <h3 className="font-semibold text-lg text-gray-900">Assessment</h3>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">
        The message identifies an error but does not clearly explain what is
        wrong or how to fix it.
      </p>

      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="w-5 h-5 fill-emerald-500 text-white shrink-0 mt-0.5" />
          <span className="text-sm text-gray-700">
            It correctly signals that the problem is related to the email
            address.
          </span>
        </div>
        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="w-5 h-5 fill-emerald-500 text-white shrink-0 mt-0.5" />
          <span className="text-sm text-gray-700">
            The message is short and easy to scan.
          </span>
        </div>
      </div>
    </div>
  );
}
