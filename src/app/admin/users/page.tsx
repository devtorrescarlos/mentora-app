import type { Metadata } from "next";
import { USERS } from "@/features/admin/data/users";
import { UsersPageHeader } from "@/features/admin/components/users/users-page-header";
import { UsersView } from "@/features/admin/components/users/users-view";

export const metadata: Metadata = {
  title: "Usuarios | Mentora",
  description: "Gestión de usuarios de la plataforma Mentora.",
};

export default function UsersPage() {
  return (
    <div className="mx-auto w-full max-w-8xl space-y-6">
      <UsersPageHeader />
      <UsersView initialUsers={USERS} />
    </div>
  );
}
