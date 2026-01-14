import { HomePage } from "@/components/HomePage";
import { Analytics } from "@vercel/analytics/react";

export function App() {
  return (
    <>
      <HomePage />
      <Analytics />
    </>
  );
}

export default App;
