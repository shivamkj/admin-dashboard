import { paginationSchema } from "./shared.js";
import {
  getAllTournaments,
  getOneTournament,
} from "../controller/tournaments.js";

export const tournamentsRoutes = [
  {
    method: "GET",
    url: "/tournaments",
    schema: { querystring: { $ref: `${paginationSchema.$id}#` } },
    handler: (request, _) => {
      const { page, limit } = request.query;
      return getAllTournaments(page, limit);
    },
  },
  {
    method: "GET",
    url: "/tournaments/:tournamentId",
    handler: (request, _) => {
      return getOneTournament(request.params.tournamentId);
    },
  },
];
