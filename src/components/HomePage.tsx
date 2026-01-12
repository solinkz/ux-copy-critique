import { HeaderSection } from "./formSection/HeaderSection";
import { FormSelection } from "./formSection/FormSelection";
import uxcopystate from "@/assets/uxcopystate.svg";
export function HomePage() {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-6xl min-w-0 content-center items-start gap-8 p-4 pt-2 sm:gap-12 sm:p-6 md:grid-cols-5 md:gap-20 md:items-center lg:p-2">
      <div className="col-span-2 ">
        <HeaderSection />
        <FormSelection />
      </div>

      {/* Critique section */}
      <div className="col-span-3 bg-gray-50 md:min-h-[757px] rounded-xl border border-gray-100 p-4">
        <div className="flex flex-col md:min-h-[757px] items-center justify-center">
          <div className="w-[129px] text-center mx-auto flex flex-col items-center">
            <img src={uxcopystate} alt="empty state icon" />
            <p className="text-gray-500 font-semibold leading-5 opacity-75">
              Your critique will appear here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
