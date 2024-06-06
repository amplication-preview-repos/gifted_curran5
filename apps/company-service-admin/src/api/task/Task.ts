import { Employee } from "../employee/Employee";
import { Project } from "../project/Project";

export type Task = {
  createdAt: Date;
  description: string | null;
  employee?: Employee | null;
  id: string;
  project?: Project | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
