import { paginationSchema } from "./shared.js";
import { getAllUsers, getOneUser } from "../controller/users.js";

export const usersRoutes = [
  {
    method: "GET",
    url: "/users",
    schema: { querystring: { $ref: `${paginationSchema.$id}#` } },
    handler: async (request, _) => {
      const { page, limit } = request.query;
      return getAllUsers(page, limit);
    },
  },
  {
    method: "GET",
    url: "/users/:userId",
    handler: async (request, _) => {
      return getOneUser(request.params.userId);
    },
  },
];
