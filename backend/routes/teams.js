import { paginationSchema } from "./shared.js";
import { getAllTeams, getOneTeam } from "../controller/teams.js";

export const teamsRoutes = [
  {
    method: "GET",
    url: "/teams",
    schema: {
      querystring: { $ref: `${paginationSchema.$id}#` },
    },
    handler: (request, _) => {
      const { page, limit } = request.query;
      return getAllTeams(page, limit);
    },
  },
  {
    method: "GET",
    url: "/teams/:teamId",
    handler: (request, reply) => {
      return getOneTeam(request.params.teamId);
    },
  },
];
