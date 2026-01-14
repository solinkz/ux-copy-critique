import uxcopystate from "@/assets/uxcopystate.svg";
export function EmptyState() {
  return (
    <div className="flex flex-col md:min-h-[757px] min-h-[550px] items-center justify-center">
      <div className="w-[129px] text-center mx-auto flex flex-col items-center">
        <img src={uxcopystate} alt="empty state icon" />
        <p className="text-gray-500 font-semibold leading-5 opacity-75">
          Your critique will appear here
        </p>
      </div>
    </div>
  );
}
