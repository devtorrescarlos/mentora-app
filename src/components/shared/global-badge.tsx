import type { ReactNode } from "react";
import {
  BookOpen,
  CircleCheck,
  CircleSlash,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { UserRole, UserStatus } from "@/features/admin/types/user";

export type GlobalBadgeType = UserRole | UserStatus;

interface BadgeConfig {
  label: string;
  icon: typeof ShieldCheck;
  className: string;
}

const BADGE_CONFIG: Record<GlobalBadgeType, BadgeConfig> = {
  Administrador: {
    label: "Administrador",
    icon: ShieldCheck,
    className: "border-primary/20 bg-primary/10 text-primary",
  },
  Mentor: {
    label: "Mentor",
    icon: GraduationCap,
    className: "border-ring/20 bg-ring/10 text-ring",
  },
  Estudiante: {
    label: "Estudiante",
    icon: BookOpen,
    className: "border-tertiary/20 bg-tertiary/10 text-tertiary",
  },
  active: {
    label: "Activo",
    icon: CircleCheck,
    className: "border-tertiary/20 bg-tertiary/10 text-tertiary",
  },
  suspended: {
    label: "Suspendido",
    icon: CircleSlash,
    className: "border-border bg-muted text-muted-foreground",
  },
};

interface GlobalBadgeProps {
  type: GlobalBadgeType;
  label?: string;
  icon?: ReactNode;
  className?: string;
}

export default function GlobalBadge({
  type,
  label,
  icon,
  className,
}: GlobalBadgeProps) {
  const {
    label: defaultLabel,
    icon: DefaultIcon,
    className: variantClassName,
  } = BADGE_CONFIG[type];

  return (
    <Badge
      variant="outline"
      className={cn("gap-1.5", variantClassName, className)}
    >
      {icon ?? <DefaultIcon />}
      {label ?? defaultLabel}
    </Badge>
  );
}
