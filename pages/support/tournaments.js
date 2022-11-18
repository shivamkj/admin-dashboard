import Head from "next/head";
import { Table } from "../../components";

export default function Tournaments() {
  return (
    <>
      <Head>
        <title>Tournaments</title>
      </Head>

      <Table
        columnDefs={[
          {
            header: () => "ID",
            accessorKey: "_id",
            cell: (info) => <td width="10%">{info.getValue()}</td>,
          },
          {
            accessorKey: "logo",
            header: () => "Logo",
            cell: (info) => (
              <td width="15%">
                <img className="h-8" src={info.getValue() ?? "http://"} />
              </td>
            ),
          },
          {
            accessorKey: "name",
            header: () => "Name",
            cell: (info) => (
              <td width="20%" className="font-medium text-gray-900">
                {info.getValue()}
              </td>
            ),
          },
          {
            accessorKey: "edition",
            header: () => "Edition",
            cell: (info) => (
              <td width="20%" className="text-gray-500">
                {info.getValue()}
              </td>
            ),
          },
          {
            accessorKey: "tournamentStatus.status",
            header: () => "Status",
            cell: (info) => (
              <td width="20%" className="text-gray-500">
                {info.getValue()}
              </td>
            ),
          },
          {
            id: "edit",
            header: () => "Edit",
            cell: (info) => (
              <td width="20%" className="mr-6">
                <button>Edit</button>
              </td>
            ),
          },
        ]}
        endpoint="tournaments"
      />
    </>
  );
}
