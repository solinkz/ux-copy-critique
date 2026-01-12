import { HeaderSection } from "./formSection/HeaderSection";
import { FormSelection } from "./formSection/FormSelection";
import { CritiqueContainer } from "./critiqueSection/CritiqueContainer";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
export function HomePage() {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-6xl min-w-0 content-center items-start gap-8 p-4 pt-2 sm:gap-12 sm:p-6 md:grid-cols-5 md:gap-20 md:items-center lg:p-2">
      <div className="col-span-2 ">
        <HeaderSection />
        <FormSelection />
      </div>
      {/* Critique section */}
      <div className="flex flex-col gap-4 col-span-3">
        <CritiqueContainer />
        <Alert className="border-0 p-0 text-muted-foreground">
          <Info strokeWidth={3} />
          <AlertTitle>Content generated may be wrong </AlertTitle>
        </Alert>
      </div>
    </div>
  );
}
