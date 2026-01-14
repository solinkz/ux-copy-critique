import { useEffect, useState } from "react";
import uxcopyloading from "@/assets/loadinguxcopy.gif";

const LOADING_MESSAGES = [
  "Evaluating UI copy...",
  "Spotting issues...",
  "Getting better suggestion...",
];

export function LoadingState() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 2000); // Change message every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:min-h-[650px] min-h-[450px] items-center justify-center">
      <div className="w-[200px] text-center mx-auto flex flex-col items-center">
        <img src={uxcopyloading} alt="loading icon" className="h-8" />
        <p className="text-gray-500 text-sm font-semibold leading-5 opacity-75 mt-2">
          {LOADING_MESSAGES[messageIndex]}
        </p>
      </div>
    </div>
  );
}
