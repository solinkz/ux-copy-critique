import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ToneSlider } from "@/components/general/ToneSlider";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export function FormSelection() {
  const [tone, setTone] = useState(50);
  const [uiCopy, setUiCopy] = useState("");
  const [elementType, setElementType] = useState("");
  const [additionalContext, setAdditionalContext] = useState("");
  const [errors, setErrors] = useState<{
    uiCopy?: string;
    elementType?: string;
  }>({});

  const handleSubmit = () => {
    const newErrors: { uiCopy?: string; elementType?: string } = {};
    if (!uiCopy.trim()) {
      newErrors.uiCopy = "UI copy is required";
    }
    if (!elementType) {
      newErrors.elementType = "Element type is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    let toneDescription = "blend";
    if (tone === 0) toneDescription = "casual";
    if (tone === 100) toneDescription = "professional";

    console.log({
      uiCopy,
      type: elementType,
      context: additionalContext,
      tone: toneDescription,
    });

    // Reset form
    setUiCopy("");
    setElementType("");
    setAdditionalContext("");
    setTone(50);
    setErrors({});
  };

  return (
    <div>
      <div>
        <div className="flex flex-col gap-5">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message" className="text-sm font-normal">
              UI copy
            </Label>
            <Textarea
              placeholder="Paste your UI copy here"
              id="message"
              className={`text-base placeholder:text-gray-500 ${
                errors.uiCopy ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-100" : ""
              }`}
              value={uiCopy}
              onChange={(e) => setUiCopy(e.target.value)}
            />
            {errors.uiCopy && (
              <p className="text-red-500 text-xs">{errors.uiCopy}</p>
            )}
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="element-type" className="text-sm font-normal">
              Type of element
            </Label>
            <Select
              value={elementType}
              onValueChange={(val) => setElementType(val || "")}
            >
              <SelectTrigger
                className={`w-full h-12 ${
                  errors.elementType
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
              >
                <SelectValue placeholder="Select element type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="button">Button</SelectItem>
                <SelectItem value="input">Input</SelectItem>
                <SelectItem value="label">Label</SelectItem>
                <SelectItem value="link">Link</SelectItem>
                <SelectItem value="text">Text</SelectItem>
                <SelectItem value="heading">Heading</SelectItem>
                <SelectItem value="subheading">Subheading</SelectItem>
                <SelectItem value="paragraph">Paragraph</SelectItem>
                <SelectItem value="caption">Caption</SelectItem>
              </SelectContent>
            </Select>
            {errors.elementType && (
              <p className="text-red-500 text-xs">{errors.elementType}</p>
            )}
          </div>
          <div className="grid w-full gap-1.5">
            <div className="flex items-center gap-1">
              <Label htmlFor="context" className="text-sm font-normal">
                Additional context
              </Label>
              <Badge
                variant="secondary"
                className="text-gray-500 px-1.5 font-light"
              >
                optional
              </Badge>
            </div>
            <Textarea
              placeholder="Where does it appear? what triggers it?"
              id="context"
              className="text-base min-h-8 placeholder:text-gray-500"
              value={additionalContext}
              onChange={(e) => setAdditionalContext(e.target.value)}
            />
          </div>
          <div className="grid w-full ">
            <Label className="text-sm font-normal">Adjust tone</Label>
            <ToneSlider value={tone} onChange={setTone} />
          </div>
        </div>

        <Button
          size="lg"
          className="shrink-0 mt-12 px-4 cursor-pointer"
          onClick={handleSubmit}
        >
          Critique copy
        </Button>
      </div>
    </div>
  );
}
