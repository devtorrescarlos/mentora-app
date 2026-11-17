import type {
  RoleFilter,
  StatusFilter,
  User,
  UserStatus,
} from "@/features/admin/types/user";

export const PAGE_SIZE = 6;

export const STATUS_LABELS: Record<UserStatus, string> = {
  active: "Activo",
  suspended: "Suspendido",
};

export const ROLE_OPTIONS: { value: RoleFilter; label: string }[] = [
  { value: "all", label: "Todos los roles" },
  { value: "Administrador", label: "Administrador" },
  { value: "Mentor", label: "Mentor" },
  { value: "Estudiante", label: "Estudiante" },
];

export const STATUS_OPTIONS: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "Todos los estados" },
  { value: "active", label: "Activos" },
  { value: "suspended", label: "Suspendidos" },
];

export const USERS: User[] = [
  {
    id: "usr-001",
    name: "Ana Sofía Martínez",
    email: "ana.martinez@mentora.com",
    role: "Administrador",
    status: "active",
    joinedAt: "2024-02-12",
  },
  {
    id: "usr-002",
    name: "Carlos Torres",
    email: "carlos.torres@mentora.com",
    role: "Mentor",
    status: "active",
    joinedAt: "2024-03-08",
  },
  {
    id: "usr-003",
    name: "Valentina Ríos",
    email: "valentina.rios@mentora.com",
    role: "Estudiante",
    status: "active",
    joinedAt: "2024-04-21",
  },
  {
    id: "usr-004",
    name: "Andrés Felipe Gómez",
    email: "andres.gomez@mentora.com",
    role: "Mentor",
    status: "suspended",
    joinedAt: "2024-05-03",
  },
  {
    id: "usr-005",
    name: "Camila Fernández",
    email: "camila.fernandez@mentora.com",
    role: "Estudiante",
    status: "active",
    joinedAt: "2024-05-19",
  },
  {
    id: "usr-006",
    name: "Diego Alejandro Ramírez",
    email: "diego.ramirez@mentora.com",
    role: "Administrador",
    status: "suspended",
    joinedAt: "2024-06-01",
  },
  {
    id: "usr-007",
    name: "Laura Jiménez",
    email: "laura.jimenez@mentora.com",
    role: "Estudiante",
    status: "active",
    joinedAt: "2024-06-14",
  },
  {
    id: "usr-008",
    name: "Miguel Ángel Herrera",
    email: "miguel.herrera@mentora.com",
    role: "Mentor",
    status: "active",
    joinedAt: "2024-07-02",
  },
  {
    id: "usr-009",
    name: "Sofía Castro",
    email: "sofia.castro@mentora.com",
    role: "Estudiante",
    status: "suspended",
    joinedAt: "2024-07-25",
  },
  {
    id: "usr-010",
    name: "Juan Pablo Morales",
    email: "juan.morales@mentora.com",
    role: "Estudiante",
    status: "active",
    joinedAt: "2024-08-09",
  },
  {
    id: "usr-011",
    name: "Isabella Vargas",
    email: "isabella.vargas@mentora.com",
    role: "Mentor",
    status: "active",
    joinedAt: "2024-08-30",
  },
  {
    id: "usr-012",
    name: "Sebastián Ortiz",
    email: "sebastian.ortiz@mentora.com",
    role: "Estudiante",
    status: "active",
    joinedAt: "2024-09-11",
  },
  {
    id: "usr-013",
    name: "Mariana López",
    email: "mariana.lopez@mentora.com",
    role: "Administrador",
    status: "active",
    joinedAt: "2024-09-27",
  },
  {
    id: "usr-014",
    name: "Felipe Restrepo",
    email: "felipe.restrepo@mentora.com",
    role: "Mentor",
    status: "suspended",
    joinedAt: "2024-10-05",
  },
  {
    id: "usr-015",
    name: "Daniela Suárez",
    email: "daniela.suarez@mentora.com",
    role: "Estudiante",
    status: "active",
    joinedAt: "2024-10-18",
  },
  {
    id: "usr-016",
    name: "Santiago Mejía",
    email: "santiago.mejia@mentora.com",
    role: "Estudiante",
    status: "active",
    joinedAt: "2024-11-02",
  },
];
