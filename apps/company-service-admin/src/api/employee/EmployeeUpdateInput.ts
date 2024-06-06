import { TaskUpdateManyWithoutEmployeesInput } from "./TaskUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  dateOfJoining?: Date | null;
  name?: string | null;
  position?: string | null;
  tasks?: TaskUpdateManyWithoutEmployeesInput;
};
