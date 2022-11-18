import Head from "next/head";
import { useRouter } from "next/router";
import { Table } from "../../components/index";

export default function Matches() {
  const router = useRouter();

  if (router.query.gameType == "0") {
    return (
      <>
        <Head>
          <title>Cricket Matches</title>
        </Head>

        <Table
          columnDefs={[
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
              accessorKey: "teamOne",
              header: () => "Team One",
              cell: (info) => {
                console.log(info.getValue());
                const { name, logo } = info.getValue();
                return (
                  <td width="23%">
                    <img className="h-4 inline-block m-2" src={logo} />
                    <span className="text-gray-500">{name}</span>
                  </td>
                );
              },
            },
            {
              accessorKey: "teamTwo",
              header: () => "Team Two",
              cell: (info) => {
                const { name, logo } = info.getValue();
                return (
                  <td width="23%">
                    <img className="h-4 inline-block m-2" src={logo} />
                    <span className="text-gray-500">{name}</span>
                  </td>
                );
              },
            },
            {
              accessorKey: "matchStatus.status",
              header: () => "Status",
              cell: (info) => (
                <td width="10%" className="font-medium text-gray-900">
                  {info.getValue()}
                </td>
              ),
            },
            {
              accessorKey: "matchVenue",
              header: () => "Venue",
              cell: (info) => {
                const { address, name } = info.getValue();
                return <td width="21%">{`${name}, ${address.city}`}</td>;
              },
            },
            {
              id: "edit",
              header: () => "Edit",
              cell: (info) => (
                <td width="15%" className="mr-6">
                  <button>Edit</button>
                </td>
              ),
            },
          ]}
          endpoint="/0/matches"
        />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Soccer Matches</title>
      </Head>
      <Table
          columnDefs={[
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
              accessorKey: "teamOne",
              header: () => "Home Team",
              cell: (info) => {
                console.log(info.getValue());
                const { name, logo } = info.getValue();
                return (
                  <td width="23%">
                    <img className="h-4 inline-block m-2" src={logo} />
                    <span className="text-gray-500">{name}</span>
                  </td>
                );
              },
            },
            {
              accessorKey: "teamTwo",
              header: () => "Away Team",
              cell: (info) => {
                const { name, logo } = info.getValue();
                return (
                  <td width="23%">
                    <img className="h-4 inline-block m-2" src={logo} />
                    <span className="text-gray-500">{name}</span>
                  </td>
                );
              },
            },
            {
              accessorKey: "matchStatus.status",
              header: () => "Status",
              cell: (info) => (
                <td width="10%" className="font-medium text-gray-900">
                  {info.getValue()}
                </td>
              ),
            },
            {
              accessorKey: "matchVenue",
              header: () => "Venue",
              cell: (info) => {
                const { address, name } = info.getValue();
                return <td width="21%">{`${name}, ${address.city}`}</td>;
              },
            },
            {
              id: "edit",
              header: () => "Edit",
              cell: (info) => (
                <td width="15%" className="mr-6">
                  <button>Edit</button>
                </td>
              ),
            },
          ]}
          endpoint="/1/matches"
        />
    </>
  );
}
