import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  endDate?: Date | null;
  startDate?: Date | null;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
  title?: string | null;
};
