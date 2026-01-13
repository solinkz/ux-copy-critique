import { CritiqueHeader } from "@/components/critiqueSection/CritiqueHeader";
import { AssessmentSection } from "./AssessmentSection";
import { Divider } from "../general/Divider";
import { IssuesSection } from "./IssuesSection";

export function CritiqueContainer() {
  return (
    <div className="col-span-3 bg-gray-50 h-[757px] md:max-h-[757px] rounded-xl border border-gray-100 relative overflow-hidden">
      <div className="h-full overflow-y-auto pb-24">
        <CritiqueHeader />

        <div className="flex flex-col gap-4 mt-4">
          {/* divider */}
          <Divider />
          <AssessmentSection />
          <IssuesSection />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none z-20" />
    </div>
  );
}
