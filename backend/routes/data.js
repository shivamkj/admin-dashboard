import { getJiraRoadMapIssues } from "../controller/external-tools/jira";

export const dataRoutes = [
  {
    method: "GET",
    url: "/data/roadmap",
    handler: (request, _) => getJiraRoadMapIssues(),
  },
];
