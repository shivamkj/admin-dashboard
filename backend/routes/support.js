import { getDeleteRequests } from "../controller/support";

export const supportRequests = [
  {
    method: "GET",
    url: "/support-requests",
    handler: async (request, _) => getDeleteRequests(),
  },
];
