import { SearchX, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UsersEmptyStateProps {
  onClearFilters: () => void;
}

export function UsersEmptyState({ onClearFilters }: UsersEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-card px-6 py-16 text-center">
      <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <SearchX className="size-5" />
      </div>
      <h3 className="mt-4 font-semibold text-foreground">
        No encontramos usuarios
      </h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">
        Prueba con otro término de búsqueda o ajusta los filtros para ver más
        resultados.
      </p>
      <Button variant="outline" className="mt-5" onClick={onClearFilters}>
        <X />
        Limpiar filtros
      </Button>
    </div>
  );
}
