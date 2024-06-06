import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskCreateInput = {
  description?: string | null;
  employee?: EmployeeWhereUniqueInput | null;
  project?: ProjectWhereUniqueInput | null;
  status?: "Option1" | null;
  title?: string | null;
};
