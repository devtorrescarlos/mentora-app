"use client";

import { UserCheck, UserX } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { User } from "@/features/admin/types/user";

interface UserActionsProps {
  user: User;
  onToggleStatus: (id: string) => void;
  compact?: boolean;
}

export function UserActions({
  user,
  onToggleStatus,
  compact = false,
}: UserActionsProps) {
  const isActive = user.status === "active";

  return (
    <div
      className={cn(
        "flex gap-2",
        compact ? "justify-end" : "w-full flex-col sm:flex-row"
      )}
    >
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="outline"
              size={compact ? "icon-sm" : "sm"}
              disabled={isActive}
              aria-label={`Activar cuenta de ${user.name}`}
              onClick={() => onToggleStatus(user.id)}
              className={cn(
                !isActive &&
                  "border-tertiary/30 text-tertiary hover:bg-tertiary/10 hover:text-tertiary"
              )}
            />
          }
        >
          <UserCheck />
          {!compact && <span>Activar</span>}
        </TooltipTrigger>
        <TooltipContent>
          {isActive ? "La cuenta ya está activa" : "Activar cuenta"}
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="destructive"
              size={compact ? "icon-sm" : "sm"}
              disabled={!isActive}
              aria-label={`Suspender cuenta de ${user.name}`}
              onClick={() => onToggleStatus(user.id)}
            />
          }
        >
          <UserX />
          {!compact && <span>Suspender</span>}
        </TooltipTrigger>
        <TooltipContent>
          {isActive ? "Suspender cuenta" : "La cuenta ya está suspendida"}
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
