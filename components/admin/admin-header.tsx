import { Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const currentUser = {
  name: "Admin Mentora",
  role: "Administrador",
  initials: "AM",
};

export function AdminHeader() {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <span className="text-lg font-bold text-primary lg:hidden">Mentora</span>

      <div className="ml-auto flex items-center gap-1 sm:gap-2">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Notificaciones"
          className="relative"
        >
          <Bell className="size-4" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-destructive" />
        </Button>

        <div className="flex items-center gap-3 pl-2">
          <Avatar>
            <AvatarFallback>{currentUser.initials}</AvatarFallback>
          </Avatar>
          <div className="hidden leading-tight sm:block">
            <p className="text-sm font-medium">{currentUser.name}</p>
            <p className="text-xs text-muted-foreground">{currentUser.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}