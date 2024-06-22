import { Avatar } from "@/entities/avatar";
import { Badge } from "@/entities/badge";
import { Routine } from "@/entities/routine";
import { Task } from "@/entities/task";

export type User = {
  id: number;
  account: unknown;
  name: string;
  image: unknown;
  agreement: Record<string, boolean>;
  avatar: Avatar;
  badges: Badge[];
  routines: Routine[];
  tasks: Task[];
  friends: User[];
  events: Event[];
};
