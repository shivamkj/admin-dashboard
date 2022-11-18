import Head from "next/head";
import { KanbanColumn, KanbanTask } from "../../components";

export default function Roadmap() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="flex flex-col w-full h-full overflow-auto text-gray-700">
        <div className="flex flex-grow space-x-6 overflow-auto">
          <KanbanColumn title="Immediate" count={6}>
            <KanbanTask />
            <KanbanTask />
            <KanbanTask />
            <KanbanTask />
            <KanbanTask />
            <KanbanTask />
          </KanbanColumn>

          <KanbanColumn title="Short Term" count={3}>
            <KanbanTask />
            <KanbanTask />
            <KanbanTask />
          </KanbanColumn>

          <KanbanColumn title="Intermediate Term" count={2}>
            <KanbanTask />
            <KanbanTask />
          </KanbanColumn>

          <KanbanColumn title="Long Term" count={4}>
            <KanbanTask />
            <KanbanTask />
            <KanbanTask />
            <KanbanTask />
          </KanbanColumn>

          <KanbanColumn title="Won't do" count={2}>
            <KanbanTask />
            <KanbanTask />
          </KanbanColumn>

          <div className="flex-shrink-0 w-6"></div>
        </div>
      </div>
    </>
  );
}
