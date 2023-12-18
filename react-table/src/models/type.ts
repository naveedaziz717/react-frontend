export interface Data {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  dob: string;
}

export interface LuxonType {
  getValue: () => string;
}

export type Column = {
  header: string;
  accessorKey?: string;
  accessorFn?: (row: Data) => string;
  cell?: (info: LuxonType) => string;
};

export type SortType = "asc" | "desc";
