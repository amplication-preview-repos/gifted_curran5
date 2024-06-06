import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  dateOfJoining?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  position?: SortOrder;
  updatedAt?: SortOrder;
};
