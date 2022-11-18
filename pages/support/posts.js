import Head from "next/head";
import { Table } from "../../components";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>

      <Table
        columnDefs={[
          {
            header: () => "ID",
            accessorKey: "_id",
            cell: (info) => <td width="10%">{info.getValue()}</td>,
          },

          {
            accessorKey: "content",
            header: () => "Content",
            cell: (info) => (
              <td width="40%" className="font-medium text-gray-900">
                {info.getValue()}
              </td>
            ),
          },
          {
            accessorKey: "imageUrls",
            header: () => "Images",
            cell: (info) => {
              const images = info.getValue();
              return (
                <td width="30%">
                  {/* {info.getValue()} */}
                  {images.length == 0 ? (
                    <></>
                  ) : (
                    <img className="h-16" src={images[0]} />
                  )}
                </td>
              );
            },
          },
          {
            accessorKey: "videos",
            header: () => "Has Video",
            cell: (info) => (
              <td width="10%" className="text-gray-500">
                {`${info.getValue().length != 0}`}
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
        endpoint="posts"
      />
    </>
  );
}
