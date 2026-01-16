import { useState } from "react";
import { HeaderSection } from "./formSection/HeaderSection";
import { FormSelection } from "./formSection/FormSelection";
import { CritiqueContainer } from "./critiqueSection/CritiqueContainer";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { BadgeInfo, Info, TextSelect, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CritiqueResponse } from "@/types/critique";

export function HomePage() {
  const [uiCopy, setUiCopy] = useState("");
  const [elementType, setElementType] = useState("");
  const [submittedUiCopy, setSubmittedUiCopy] = useState("");
  const [submittedElementType, setSubmittedElementType] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [critiqueData, setCritiqueData] = useState<CritiqueResponse | null>(
    null
  );

  return (
    <div className="mx-auto grid min-h-screen w-full max-w-6xl min-w-0 content-center items-start gap-6 p-3 pt-2 sm:gap-8 sm:p-4 md:grid-cols-5 md:gap-12 md:items-center lg:p-2">
      <div className="col-span-full md:col-span-2">
        <HeaderSection />
        <FormSelection
          uiCopy={uiCopy}
          setUiCopy={setUiCopy}
          elementType={elementType}
          setElementType={setElementType}
          setLoading={setLoading}
          setCritiqueData={setCritiqueData}
          loading={loading}
          setSubmittedUiCopy={setSubmittedUiCopy}
          setSubmittedElementType={setSubmittedElementType}
          setErrorMessage={setErrorMessage}
        />
      </div>
      {/* Critique section */}
      <div className="flex flex-col gap-4 col-span-full md:col-span-3">
        <CritiqueContainer
          uiCopy={submittedUiCopy}
          elementType={submittedElementType}
          loading={loading}
          critiqueData={critiqueData}
          errorMessage={errorMessage}
        />
        <Alert className="border-0 p-0 text-muted-foreground">
          <Info strokeWidth={3} />
          <AlertTitle>Content generated may be wrong </AlertTitle>
        </Alert>
      </div>
      {/* Control */}
      <div className=" hidden flex flex-col gap-4 mt-4 absolute bottom-1/2 right-30 bg-red -mb-20">
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
