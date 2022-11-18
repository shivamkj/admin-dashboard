import Head from "next/head";
import { Table } from "../../components/index";

export default function Users() {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>

      <Table
        columnDefs={[
          {
            header: () => "ID",
            accessorKey: "_id",
            cell: (info) => <td width="10%">{info.getValue()}</td>,
          },
          {
            accessorKey: "profileImage",
            header: () => "Profile Pic",
            cell: (info) => (
              <td width="15%">
                <img className="h-8" src={info.getValue()} />
              </td>
            ),
          },
          {
            accessorKey: "firstName",
            header: () => "First Name",
            cell: (info) => <td width="15%">{info.getValue()}</td>,
          },
          {
            accessorKey: "lastName",
            header: () => "Last Name",
            cell: (info) => <td width="15%">{info.getValue()}</td>,
          },
          {
            accessorKey: "location",
            header: () => "Location",
            cell: (info) => <td width="15%">{info.getValue().city}</td>,
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
        endpoint="users"
      />
    </>
  );
}
