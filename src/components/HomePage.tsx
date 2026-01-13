import { HeaderSection } from "./formSection/HeaderSection";
import { FormSelection } from "./formSection/FormSelection";
import { CritiqueContainer } from "./critiqueSection/CritiqueContainer";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { BadgeInfo, Info, TextSelect, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HomePage() {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-6xl min-w-0 content-center items-start gap-8 p-4 pt-2 sm:gap-12 sm:p-6 md:grid-cols-5 md:gap-30 md:items-center lg:p-2">
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
      {/* Control */}
      <div className="flex flex-col gap-4 mt-4 absolute bottom-1/2 right-30 bg-red -mb-20">
        <Button
          variant="secondary"
          size="icon-sm"
          aria-label="Submit"
          className="rounded-full border border-gray-200 hover:bg-gray-100 transform hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <ScrollText />
        </Button>
        <Button
          variant="secondary"
          size="icon-sm"
          aria-label="Submit"
          className="rounded-full border border-gray-200 hover:bg-gray-100 transform hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <BadgeInfo />
        </Button>
        <Button
          variant="secondary"
          size="icon-sm"
          aria-label="Submit"
          className="rounded-full border border-gray-200  hover:bg-gray-100 transform hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <TextSelect />
        </Button>
      </div>
    </div>
  );
}
