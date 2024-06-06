import { Task } from "../task/Task";

export type Employee = {
  createdAt: Date;
  dateOfJoining: Date | null;
  id: string;
  name: string | null;
  position: string | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
