"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <Button 
          onClick={handleClick}
          className="px-8 py-3 text-lg font-medium"
          size="lg"
        >
          Click Me
        </Button>
      </div>
    </main>
  );
}