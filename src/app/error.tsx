"use client";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-lg space-y-4 rounded-2xl border border-red-400/20 bg-red-500/10 p-6 text-center">
      <h2 className="text-2xl font-semibold">Something went wrong</h2>
      <p className="text-white/70">An unexpected error occurred while loading this page.</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
