import { paginationSchema } from "./shared.js";
import {
  getAllMatches,
  getMatchOfficials,
  getOneMatch,
} from "../controller/matches.js";

export const matchesRoutes = [
  {
    method: "GET",
    url: "/:gameType/matches",
    schema: { querystring: { $ref: `${paginationSchema.$id}#` } },
    handler: (request, _) => {
      const { page, limit } = request.query;
      return getAllMatches(page, limit, request.params.gameType);
    },
  },
  {
    method: "GET",
    url: "/:gameType/matches/:matchId",
    handler: (request, _) => {
      return getOneMatch(request.params.matchId, request.params.gameType);
    },
  },
  {
    method: "GET",
    url: "/matches/:matchId/officials",
    handler: async (request, _) => {
      return getMatchOfficials(request.params.matchId);
    },
  },
];
