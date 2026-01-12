import { BarcodeIcon } from "lucide-react";
export function HeaderSection() {
  return (
    <>
      <div className="mb-8">
        <div className="flex mb-4">
          <BarcodeIcon size={32} />
          <BarcodeIcon size={32} />
        </div>
        <h1 className="text-4xl font-semibold mb-1">UX Copy Critique</h1>
        <p className="text-muted-foreground font-light">
          Get thoughtful feedback on your UI text.
        </p>
      </div>
    </>
  );
}
