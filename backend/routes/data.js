import { getUserAnalytics } from "../controller/analytics";
import { getJiraRoadMapIssues } from "../controller/external-tools/jira";

export const dataRoutes = [
  {
    method: "GET",
    url: "/data/roadmap",
    handler: (request, _) => getJiraRoadMapIssues(),
  },
  {
    method: "GET",
    url: "/data/users",
    handler: (request, _) => {
      const { page, limit } = request.query;
      return getUserAnalytics(page, limit);
    },
  },
];
