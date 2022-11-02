import { paginationSchema } from "./shared.js";
import { getAllPosts, getOnePost } from "../controller/posts.js";

export const postsRoutes = [
  {
    method: "GET",
    url: "/posts",
    schema: { querystring: { $ref: `${paginationSchema.$id}#` } },
    handler: (request, _) => {
      return getAllPosts(request.query.page, request.query.limit);
    },
  },

  {
    method: "GET",
    url: "/posts/:postId",
    handler: (request, _) => {
      return getOnePost(request.params.postId);
    },
  },
];
