import { Avatar } from "@/entities/avatar";
import { Badge } from "@/entities/badge";
import { Routine } from "@/entities/routine";
import { Task } from "@/entities/task";

export type User = {
  account: unknown;
  id: number;
  name: string;
  image?: unknown;
  agreement: Record<string, boolean>;
  avatar: Avatar;
  badges?: Badge[];
  routines: Routine[];
  tasks: Task[];
  friends?: User[];
  events: Event[];
};
