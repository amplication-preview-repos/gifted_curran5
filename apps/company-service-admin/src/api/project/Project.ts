import { Customer } from "../customer/Customer";
import { Task } from "../task/Task";

export type Project = {
  createdAt: Date;
  customer?: Customer | null;
  description: string | null;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  tasks?: Array<Task>;
  title: string | null;
  updatedAt: Date;
};
