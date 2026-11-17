import { Users } from "lucide-react";

export function UsersPageHeader() {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Users className="size-5" />
        </span>
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Gestión de usuarios
          </h1>
          <p className="mt-1 max-w-xl text-sm text-muted-foreground">
            Administra las cuentas, roles y accesos de la plataforma.
          </p>
        </div>
      </div>
    </header>
  );
}
