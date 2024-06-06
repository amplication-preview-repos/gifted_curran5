import { ProjectUpdateManyWithoutCustomersInput } from "./ProjectUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  name?: string | null;
  projects?: ProjectUpdateManyWithoutCustomersInput;
};
