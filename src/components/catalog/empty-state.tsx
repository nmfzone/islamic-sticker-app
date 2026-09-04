import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  readonly onReset: () => void;
}

export function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl bg-secondary px-6 py-12 text-center">
      <span className="mb-4 grid size-12 place-items-center rounded-full bg-background text-muted-foreground">
        <SearchX className="size-5" aria-hidden="true" />
      </span>
      <h2 className="text-lg font-bold tracking-[-0.02em]">No matching packs yet</h2>
      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
        Try another sticker word or browse all categories. More packs are on the way.
      </p>
      <Button variant="outline" className="mt-5" onClick={onReset}>
        Show all packs
      </Button>
    </div>
  );
}
