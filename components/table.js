import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import CopyToClipBoard from "./copy-to-clipboard";

const PAGE_SIZE = 6;

export default function Table() {
  const columns = useMemo(
    () => [
      {
        header: () => "ID",
        accessorKey: "_id",
        cell: (info) => (
          <td width="10%">
            {/* <CopyToClipBoard /> */}
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
    ],
    []
  );

  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: PAGE_SIZE,
  });

  const fetchDataOptions = { pageIndex, pageSize };

  const pagination = useMemo(
    () => ({ pageIndex, pageSize }),
    [pageIndex, pageSize]
  );

  const { isLoading, error, data } = useQuery({
    queryKey: ["teams", fetchDataOptions],
    queryFn: () =>
      fetch(
        `http://localhost:3000/api/teams?page=${pageIndex}&limit=${pageSize}`,
        {
          headers: {
            Authorization: "mysupersecret1234567120",
          },
        }
      ).then((res) => res.json()),
    keepPreviousData: true,
  });

  const table = useReactTable({
    data: data?.data,
    columns,
    pageCount: data?.total,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="min-w-full p-2 align-middle">
      <div className="overflow-x-auto shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row
                  .getVisibleCells()
                  .map((cell) =>
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="h-2" />
        <Pagination table={table} />
      </div>
    </div>
  );
}

const Pagination = ({ table }) => {
  const resultEnd = (table.getState().pagination.pageIndex + 1) * PAGE_SIZE;

  return (
    <nav
      className="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing{" "}
          <span className="font-medium">{resultEnd - (PAGE_SIZE - 1)} </span> to{" "}
          <span className="font-medium">{resultEnd}</span> of{" "}
          <span className="font-medium">{table.getPageCount()}</span> results
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </nav>
  );
};
