import { Avatar } from "./avatar";
import { Badge } from "./badge";
import { Routine } from "./routine";
import { Task } from "./task";

export type User = {
  account: string;
  id: string;
  name: string;
  image: string;
  agreement: boolean;
  avatar: Avatar;
  badges: Badge[];
  routines: Routine[];
  tasks: Task[];
  friends: User[];
  events: Event[];
};
