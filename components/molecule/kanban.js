import {
  faCalendar,
  faComment,
  faMailForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function KanbanColumn({ title, count, children }) {
  return (
    <div className="flex flex-col flex-shrink-0 w-72">
      <div className="flex items-center flex-shrink-0 h-10 px-2">
        <span className="block text-sm font-semibold">{title}</span>
        <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
          {count}
        </span>
      </div>
      <div className="flex flex-col pb-2 overflow-auto">{children}</div>
    </div>
  );
}

export function KanbanTask({ data }) {
  return (
    <div
      className="relative flex flex-col items-start p-4 mt-3 bg-white shadow-sm border-spacing-1 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
      draggable="true"
    >
      <span className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">
        {data.status.text}
      </span>
      <h4 className="mt-3 text-sm font-medium">{data?.summary}</h4>
      <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCalendar} size="sm" className="inline" />
          <span className="ml-1 leading-none">Dec 12</span>
        </div>
        <div className="relative flex items-center ml-4">
          <FontAwesomeIcon icon={faComment} size="sm" className="inline" />
          <span className="ml-1 leading-none">4</span>
        </div>
        <div className="flex items-center ml-4">
          <FontAwesomeIcon icon={faMailForward} size="sm" className="inline" />
          <span className="ml-1 leading-none">1</span>
        </div>
      </div>
    </div>
  );
}
