import { cn } from "@/lib/utils";

interface ToneSliderProps {
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

export function ToneSlider({ value, onChange, className }: ToneSliderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    // Snap logic
    if (newValue < 25) onChange(0);
    else if (newValue < 75) onChange(50);
    else onChange(100);
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="relative h-6 flex items-center">
        {/* Track Background (Gray) */}
        <div className="absolute w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          {/* Active Fill (Orange) */}
          <div
            className="h-full bg-[#EA580C] transition-all duration-300 ease-out rounded-full"
            style={{ width: `${value}%` }}
          />
        </div>

        {/* Input Range */}
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="absolute w-full h-full opacity-0 cursor-pointer z-20"
        />

        {/* Custom Thumb */}
        <div
          className="absolute h-4 w-4 bg-[#EA580C] rounded-full  shadow-sm z-10 flex items-center justify-center pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: `calc(${value}% + (${8 - value * 0.16}px) - 12px)`,
          }}
        >
          <div className="w-1 h-1 bg-white rounded-full" />
        </div>

        {/* Start/End Markers (White dots in track) - Visual flair from image */}
        <div className="absolute left-0.5 w-1 h-1 bg-white rounded-full z-0 pointer-events-none" />
        <div className="absolute left-1/2 w-1 h-1 bg-white rounded-full z-0 pointer-events-none" />
        <div className="absolute right-0.5 w-1 h-1 bg-white rounded-full z-0 pointer-events-none" />
      </div>

      {/* Labels */}
      <div className="flex justify-between">
        <span
          className={cn(
            "text-xs tracking-wide transition-colors duration-200 cursor-pointer w-20 flex justify-start",
            value === 0
              ? "text-foreground font-medium"
              : "text-muted-foreground"
          )}
          onClick={() => onChange(0)}
        >
          Casual
        </span>
        <span
          className={cn(
            "text-xs tracking-wide transition-colors duration-200 cursor-pointer w-20 flex text-cente justify-center",
            value === 50
              ? "text-foreground font-medium"
              : "text-muted-foreground"
          )}
          onClick={() => onChange(50)}
        >
          Blend
        </span>
        <span
          className={cn(
            "text-xs tracking-wide transition-colors duration-200 cursor-pointer w-20 flex",
            value === 100
              ? "text-foreground font-medium"
              : "text-muted-foreground"
          )}
          onClick={() => onChange(100)}
        >
          Professional
        </span>
      </div>
    </div>
  );
}
