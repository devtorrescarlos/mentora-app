import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserCard } from "@/features/admin/components/users/user-card";
import { UserTableRow } from "@/features/admin/components/users/user-table-row";
import { UsersEmptyState } from "@/features/admin/components/users/users-empty-state";
import type { User } from "@/features/admin/types/user";

interface UsersTableProps {
  users: User[];
  onToggleStatus: (id: string) => void;
  onClearFilters: () => void;
}

export function UsersTable({
  users,
  onToggleStatus,
  onClearFilters,
}: UsersTableProps) {
  if (users.length === 0) {
    return <UsersEmptyState onClearFilters={onClearFilters} />;
  }

  return (
    <>
      <div className="hidden overflow-hidden rounded-xl border bg-card shadow-sm md:block">
        <Table>
          <TableHeader className="bg-muted/40">
            <TableRow>
              <TableHead className="px-4">Usuario</TableHead>
              <TableHead>Rol</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="px-4 text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <UserTableRow
                key={user.id}
                user={user}
                onToggleStatus={onToggleStatus}
              />
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="grid gap-3 md:hidden">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onToggleStatus={onToggleStatus}
          />
        ))}
      </div>
    </>
  );
}
