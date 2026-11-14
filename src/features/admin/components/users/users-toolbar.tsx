"use client";

import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ROLE_OPTIONS, STATUS_OPTIONS } from "@/features/admin/data/users";
import type { RoleFilter, StatusFilter } from "@/features/admin/types/user";

interface UsersToolbarProps {
  search: string;
  role: RoleFilter;
  status: StatusFilter;
  onSearchChange: (value: string) => void;
  onRoleChange: (value: RoleFilter) => void;
  onStatusChange: (value: StatusFilter) => void;
  onClearFilters: () => void;
}

export function UsersToolbar({
  search,
  role,
  status,
  onSearchChange,
  onRoleChange,
  onStatusChange,
  onClearFilters,
}: UsersToolbarProps) {
  const hasFilters =
    search.trim().length > 0 || role !== "all" || status !== "all";

  return (
    <div className="rounded-xl border bg-card p-3 shadow-sm sm:p-4">
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_180px_180px_auto] lg:items-center">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar por nombre o correo..."
            aria-label="Buscar usuarios"
            className="h-9 pl-9"
          />
        </div>

        <Select
          items={ROLE_OPTIONS}
          value={role}
          onValueChange={(value) => onRoleChange(value ?? "all")}
        >
          <SelectTrigger className="h-9 w-full" aria-label="Filtrar por rol">
            <SelectValue placeholder="Todos los roles" />
          </SelectTrigger>
          <SelectContent>
            {ROLE_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          items={STATUS_OPTIONS}
          value={status}
          onValueChange={(value) => onStatusChange(value ?? "all")}
        >
          <SelectTrigger className="h-9 w-full" aria-label="Filtrar por estado">
            <SelectValue placeholder="Todos los estados" />
          </SelectTrigger>
          <SelectContent>
            {STATUS_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {hasFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="justify-start lg:justify-center"
          >
            <X />
            Limpiar
          </Button>
        )}
      </div>
    </div>
  );
}
