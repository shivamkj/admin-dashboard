import Head from "next/head";
import { KanbanColumn, KanbanTask, Loader } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../../utils";

export default function Roadmap() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["roadmap"],
    queryFn: () => httpClient.get("/data/roadmap").then((res) => res.data),
    keepPreviousData: true,
  });

  if (isLoading) return <Loader />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Head>
        <title>Roadmap</title>
      </Head>

      <div className="flex flex-col w-full h-full overflow-auto text-gray-700">
        <div className="flex flex-grow space-x-6 overflow-auto">
          <KanbanColumn title="Immediate" count={data.immediate.length}>
            {data.immediate.map((data) => (
              <KanbanTask data={data} key={data.id} />
            ))}
          </KanbanColumn>

          <KanbanColumn title="Short Term" count={data.shortTerm.length}>
            {data.shortTerm.map((data) => (
              <KanbanTask data={data} key={data.id} />
            ))}
          </KanbanColumn>

          <KanbanColumn
            title="Intermediate Term"
            count={data.mediumTerm.length}
          >
            {data.mediumTerm.map((data) => (
              <KanbanTask data={data} key={data.id} />
            ))}
          </KanbanColumn>

          <KanbanColumn title="Long Term" count={data.longTerm.length}>
            {data.longTerm.map((data) => (
              <KanbanTask data={data} key={data.id} />
            ))}
          </KanbanColumn>

          <div className="flex-shrink-0 w-6"></div>
        </div>
      </div>
    </>
  );
}
