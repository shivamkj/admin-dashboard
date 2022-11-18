export const dataRoutes = [
  {
    method: "GET",
    url: "/data/roadmap",
    handler: (request, _) => {
      const { page, limit } = request.query;
      return getAllMatches(page, limit, request.params.gameType);
    },
  },
];
