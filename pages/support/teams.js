import Head from "next/head";
import { Table } from "../../components/index";

export default function Teams() {
  return (
    <>
      <Head>
        <title>Teams</title>
      </Head>

      <Table
        columnDefs={[
          {
            header: () => "ID",
            accessorKey: "_id",
            cell: (info) => (
              <td width="10%">
                {info.getValue()}
              </td>
            ),
          },
          {
            accessorKey: "logo",
            header: () => "Logo",
            cell: (info) => (
              <td width="15%">
                <img className="h-8" src={info.getValue()} />
              </td>
            ),
          },
          {
            id: "name",
            accessorFn: (row) => ({ name: row.name, shortName: row.shortName }),
            header: () => "Name",
            cell: (info) => {
              console.log(info);
              const { name, shortName } = info.getValue();
              return (
                <td width="30%">
                  <div className="font-medium text-gray-900">{name}</div>
                  <div className="text-gray-500">{shortName}</div>
                </td>
              );
            },
          },

          {
            id: "location",
            accessorFn: (row) => ({
              teamCity: row.teamCity,
              address: row.location.address,
            }),
            header: () => "Location",
            cell: (info) => {
              console.log(info);
              const { teamCity, address } = info.getValue();
              return (
                <td width="35%">
                  <div className="font-medium text-gray-900">{teamCity}</div>
                  <div className="text-gray-500">{address}</div>
                </td>
              );
            },
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
        endpoint="teams"
      />
    </>
  );
}
