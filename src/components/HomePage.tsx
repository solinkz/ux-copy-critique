import { HeaderSection } from "./formSection/HeaderSection";
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
import { ToneSlider } from "./ToneSlider";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export function HomePage() {
  const [tone, setTone] = useState(50);
  return (
    <div className="mx-auto border-l border-r border-gray-100 grid min-h-screen w-full max-w-6xl min-w-0 content-center items-start gap-8 p-4 pt-2 sm:gap-12 sm:p-6 md:grid-cols-5 md:gap-20 md:items-center lg:p-2">
      <div className="col-span-2 ">
        <HeaderSection />

        {/* Form Section */}

        <div>
          <div className="flex flex-col gap-5">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message" className="text-sm font-normal">
                UI copy
              </Label>
              <Textarea
                placeholder="Paste your UI copy here"
                id="message"
                className="text-base"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="element-type" className="text-sm font-normal">
                Type of element
              </Label>
              <Select>
                <SelectTrigger className="w-full h-12">
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
            </div>
            <div className="grid w-full gap-1.5">
              <div className="flex items-center gap-1">
                <Label htmlFor="message" className="text-sm font-normal">
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
                placeholder="You can add more context"
                id="message"
                className="text-base min-h-8"
              />
            </div>
            <div className="grid w-full ">
              <Label className="text-sm font-normal">Adjust tone</Label>
              <ToneSlider value={tone} onChange={setTone} />
            </div>
          </div>

          <Button size="lg" className="shrink-0 mt-12 px-4 cursor-pointer">
            Critique copy
          </Button>
        </div>
      </div>

      {/* Critique section */}
      <div className="col-span-3 bg-gray-50 md:min-h-[757px] rounded-xl border border-gray-100 p-4">
        aag
      </div>
    </div>
  );
}
