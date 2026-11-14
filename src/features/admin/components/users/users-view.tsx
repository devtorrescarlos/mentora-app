"use client";

import { useMemo, useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PAGE_SIZE } from "@/features/admin/data/users";
import { UsersPagination } from "@/features/admin/components/users/users-pagination";
import { UsersTable } from "@/features/admin/components/users/users-table";
import { UsersToolbar } from "@/features/admin/components/users/users-toolbar";
import type {
  RoleFilter,
  StatusFilter,
  User,
} from "@/features/admin/types/user";

interface UsersViewProps {
  initialUsers: User[];
}

export function UsersView({ initialUsers }: UsersViewProps) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState<RoleFilter>("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [page, setPage] = useState(1);

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("es");

    return users.filter((user) => {
      const matchesQuery =
        query.length === 0 ||
        user.name.toLocaleLowerCase("es").includes(query) ||
        user.email.toLocaleLowerCase("es").includes(query);

      const matchesRole = role === "all" || user.role === role;
      const matchesStatus = status === "all" || user.status === status;

      return matchesQuery && matchesRole && matchesStatus;
    });
  }, [users, search, role, status]);

  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);

  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredUsers.slice(start, start + PAGE_SIZE);
  }, [filteredUsers, currentPage]);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleRoleChange = (value: RoleFilter) => {
    setRole(value);
    setPage(1);
  };

  const handleStatusChange = (value: StatusFilter) => {
    setStatus(value);
    setPage(1);
  };

  const handleClearFilters = () => {
    setSearch("");
    setRole("all");
    setStatus("all");
    setPage(1);
  };

  const handleToggleStatus = (id: string) => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "active" ? "suspended" : "active",
            }
          : user,
      ),
    );
  };

  return (
    <TooltipProvider>
      <div className="space-y-4">
        <UsersToolbar
          search={search}
          role={role}
          status={status}
          onSearchChange={handleSearchChange}
          onRoleChange={handleRoleChange}
          onStatusChange={handleStatusChange}
          onClearFilters={handleClearFilters}
        />

        <UsersTable
          users={paginatedUsers}
          onToggleStatus={handleToggleStatus}
          onClearFilters={handleClearFilters}
        />

        <UsersPagination
          page={currentPage}
          totalPages={totalPages}
          totalItems={filteredUsers.length}
          pageSize={PAGE_SIZE}
          onPageChange={setPage}
        />
      </div>
    </TooltipProvider>
  );
}
