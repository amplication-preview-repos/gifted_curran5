import { Project } from "../project/Project";

export type Customer = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  projects?: Array<Project>;
  updatedAt: Date;
};
