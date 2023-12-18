import { useMemo } from "react";
import { BasicTable } from "./components";
import userData from "./data/data";
import { DateTime } from "luxon";
import { Column, Data, LuxonType } from "./models/type";

export default function App() {
  const data = useMemo(() => userData, []);
  const columns: Column[] = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorFn: (row: Data) => `${row.first_name} ${row.last_name}`,
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
    },
    {
      header: "Data Of Birth",
      accessorKey: "dob",
      cell: (info: LuxonType) =>
        DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
    },
  ];

  return (
    <main>
      <h1>React Table</h1>
      <BasicTable data={data} columns={columns} />
    </main>
  );
}
