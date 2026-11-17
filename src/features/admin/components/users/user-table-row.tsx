import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import GlobalBadge from "@/components/shared/global-badge";
import { UserActions } from "@/features/admin/components/users/user-actions";
import { UserAvatar } from "@/features/admin/components/users/user-avatar";
import type { User } from "@/features/admin/types/user";

interface UserTableRowProps {
  user: User;
  onToggleStatus: (id: string) => void;
}

export function UserTableRow({ user, onToggleStatus }: UserTableRowProps) {
  return (
    <TableRow>
      <TableCell className="px-4 py-3">
        <div className="flex items-center gap-3">
          <UserAvatar name={user.name} />
          <div className="min-w-0">
            <p className="truncate font-medium text-foreground">{user.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              {user.email}
            </p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <GlobalBadge type={user.role} />
      </TableCell>
      <TableCell>
        <GlobalBadge type={user.status} />
      </TableCell>
      <TableCell className="px-4 text-right">
        <UserActions
          user={user}
          onToggleStatus={onToggleStatus}
          compact
        />
      </TableCell>
    </TableRow>
  );
}
