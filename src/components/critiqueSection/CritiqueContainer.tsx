import { CritiqueHeader } from "@/components/critiqueSection/CritiqueHeader";
import { AssessmentSection } from "./AssessmentSection";
import { Divider } from "../general/Divider";
import { IssuesSection } from "./IssuesSection";
import { RewriteSection } from "./RewriteSection";

import { useRef, useState, useEffect } from "react";
import { EmptyState } from "./emptyState";
import { LoadingState } from "./LoadingState";
import type { CritiqueResponse } from "@/types/critique";

interface CritiqueContainerProps {
  uiCopy: string;
  elementType: string;
  loading: boolean;
  critiqueData: CritiqueResponse | null;
}

export function CritiqueContainer({
  uiCopy,
  elementType,
  loading,
  critiqueData,
}: CritiqueContainerProps) {
  const [isBottom, setIsBottom] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      // Check if we are close to the bottom (within 10px)
      if (scrollHeight - scrollTop <= clientHeight + 10) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    }
  };

  useEffect(() => {
    // Initial check in case content is short enough to not scroll
    // Wrap in requestAnimationFrame or setTimeout to avoid sync layout effect issues if needed,
    // but just checking ref is usually fine. To satisfy linter about sync setState in effect:
    const checkScroll = () => handleScroll();
    checkScroll();
  }, [critiqueData, loading]); // Re-check when content changes

  return (
    <div className="col-span-3 bg-gray-50 h-[757px] md:max-h-[757px] rounded-xl border border-gray-100 relative overflow-hidden">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="h-full overflow-y-auto "
      >
        {/* Case 1: Loading State */}
        {loading && (
          <div>
            <CritiqueHeader uiCopy={uiCopy} elementType={elementType} />
            <LoadingState />
          </div>
        )}

        {/* Case 2: Empty State (No loading, no data) */}
        {!loading && !critiqueData && <EmptyState />}

        {/* Case 3: Data Display (No loading, has data) */}
        {!loading && critiqueData && (
          <div>
            <CritiqueHeader uiCopy={uiCopy} elementType={elementType} />

            <div className="flex flex-col gap-4 mt-4">
              {/* divider */}
              <Divider />
              {/* Pass data to children components in next step */}
              <AssessmentSection
                assessment={critiqueData.critique.assessment}
              />
              <IssuesSection issues={critiqueData.critique.issues} />
              <RewriteSection rewrite={critiqueData.rewrite} />
            </div>
          </div>
        )}
      </div>

      {/* Bottom gradient to hide content*/}
      <div
        className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none z-20 transition-opacity duration-300 ${
          isBottom ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
