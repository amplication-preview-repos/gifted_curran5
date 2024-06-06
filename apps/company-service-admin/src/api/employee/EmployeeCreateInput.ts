import { TaskCreateNestedManyWithoutEmployeesInput } from "./TaskCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  dateOfJoining?: Date | null;
  name?: string | null;
  position?: string | null;
  tasks?: TaskCreateNestedManyWithoutEmployeesInput;
};
