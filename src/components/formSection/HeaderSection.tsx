import { BarcodeIcon } from "lucide-react";
import uxcopylogo from "@/assets/uxcopylogo.svg";
export function HeaderSection() {
  return (
    <>
      <div className="mb-8">
        <img src={uxcopylogo} alt="UX Copy Critique" className="mb-8" />

        <h1 className="text-4xl font-semibold mb-1">UX Copy Critique</h1>
        <p className="text-muted-foreground font-light">
          Get thoughtful feedback on your UI text.
        </p>
      </div>
    </>
  );
}
