import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  endDate?: Date | null;
  startDate?: Date | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
  title?: string | null;
};
