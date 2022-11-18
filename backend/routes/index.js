import { matchesRoutes } from "./matches.js";
import { postsRoutes } from "./posts.js";
import { tournamentsRoutes } from "./tournaments.js";
import { usersRoutes } from "./users.js";
import { teamsRoutes } from "./teams.js";
import { supportRequests } from "./support.js";

export const apiRoutes = [
  ...matchesRoutes,
  ...postsRoutes,
  ...tournamentsRoutes,
  ...usersRoutes,
  ...teamsRoutes,
  ...supportRequests,
];
