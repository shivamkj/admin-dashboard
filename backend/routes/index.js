import { matchesRoutes } from "./matches";
import { postsRoutes } from "./posts";
import { tournamentsRoutes } from "./tournaments";
import { usersRoutes } from "./users";
import { teamsRoutes } from "./teams";
import { supportRequests } from "./support";
import { dataRoutes } from "./data";

export const apiRoutes = [
  ...matchesRoutes,
  ...postsRoutes,
  ...tournamentsRoutes,
  ...usersRoutes,
  ...teamsRoutes,
  ...supportRequests,
  ...dataRoutes,
];
