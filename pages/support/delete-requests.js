import Head from "next/head";
import { SecondaryButton, Table } from "../../components";

export default function DeleteRequests() {
  return (
    <>
      <Head>
        <title>Delete Requests</title>
      </Head>

      <Table
        columnDefs={[
          {
            accessorKey: "description",
            header: () => "Description",
            cell: (info) => (
              <td width="30%" className="font-medium text-gray-900">
                {info.getValue()}
              </td>
            ),
          },
          {
            id: "name",
            accessorFn: (row) => {
              return {
                firstName: row.user?.firstName,
                shortName: row.user?.lastName,
              };
            },
            header: () => "Name",
            cell: (info) => {
              const { firstName, shortName } = info.getValue();
              return (
                <td width="20%">
                  <div className="font-medium text-gray-900">{firstName}</div>
                  <div className="text-gray-500">{shortName}</div>
                </td>
              );
            },
          },

          {
            id: "location",
            accessorFn: (row) => row.user?.location?.city,
            header: () => "Location",
            cell: (info) => (
              <td width="30%" className="text-gray-500">
                {info?.getValue()}
              </td>
            ),
          },

          {
            id: "action",
            header: () => "Take Action",
            cell: (info) => (
              <td width="20%" className="mr-6">
                <SecondaryButton title="Take Action" />
              </td>
            ),
          },
        ]}
        endpoint="/support/delete-requests"
      />
    </>
  );
}
