import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskWhereInput = {
  description?: StringNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  status?: "Option1";
  title?: StringNullableFilter;
};
