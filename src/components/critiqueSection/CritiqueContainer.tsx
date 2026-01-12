import { EmptyState } from "./emptyState";
import { CritiqueHeader } from "@/components/critiqueSection/CritiqueHeader";
export function CritiqueContainer() {
  return (
    <div className="col-span-3 bg-gray-50 h-[757px] md:max-h-[757px] rounded-xl border border-gray-100 relative overflow-hidden flex flex-col">
      <CritiqueHeader />

      <div className="flex flex-col gap-4">

        {/* divider */}
        <div className="h-0.5 w-full bg-gray-100"></div>


      </div>

      <div className="flex flex-col gap-4"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none z-20" />
    </div>
  );
}
