export const USER_ROLES = ["Administrador", "Mentor", "Estudiante"] as const;

export type UserRole = (typeof USER_ROLES)[number];

export const USER_STATUSES = ["active", "suspended"] as const;

export type UserStatus = (typeof USER_STATUSES)[number];

export type RoleFilter = UserRole | "all";

export type StatusFilter = UserStatus | "all";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  joinedAt: string;
}
