import { ProjectCreateNestedManyWithoutCustomersInput } from "./ProjectCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  name?: string | null;
  projects?: ProjectCreateNestedManyWithoutCustomersInput;
};
