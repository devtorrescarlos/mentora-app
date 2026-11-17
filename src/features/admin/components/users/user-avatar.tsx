import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { getInitials } from "@/lib/getInitials";

interface UserAvatarProps {
  name: string;
  className?: string;
}

export function UserAvatar({ name, className }: UserAvatarProps) {
  return (
    <Avatar className={cn("size-9", className)}>
      <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
}
