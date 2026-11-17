import { Mail } from "lucide-react";
import GlobalBadge from "@/components/shared/global-badge";
import { UserActions } from "@/features/admin/components/users/user-actions";
import { UserAvatar } from "@/features/admin/components/users/user-avatar";
import type { User } from "@/features/admin/types/user";

interface UserCardProps {
  user: User;
  onToggleStatus: (id: string) => void;
}

export function UserCard({ user, onToggleStatus }: UserCardProps) {
  return (
    <article className="rounded-xl border bg-card p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <UserAvatar name={user.name} className="size-10" />
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-foreground">{user.name}</p>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Mail className="size-3.5 shrink-0" />
            <span className="truncate">{user.email}</span>
          </p>
        </div>
        <GlobalBadge type={user.status} />
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <GlobalBadge type={user.role} />
        <span className="text-xs text-muted-foreground">
          Desde {user.joinedAt.slice(0, 4)}
        </span>
      </div>

      <div className="mt-4 border-t pt-3">
        <UserActions user={user} onToggleStatus={onToggleStatus} />
      </div>
    </article>
  );
}
