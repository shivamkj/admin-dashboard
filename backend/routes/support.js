import { getDeleteRequests } from "../controller/support";

export const supportRequests = [
  {
    method: "GET",
    url: "/support/delete-requests",
    handler: (request, _) => {
      const { page, limit } = request.query;
      return getDeleteRequests(page, limit);
    },
  },
];
