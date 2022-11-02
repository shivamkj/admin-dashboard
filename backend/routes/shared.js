export const paginationSchema = {
  $id: "paginationSchema",
  type: "object",
  properties: {
    page: { type: "number" },
    limit: { type: "number" },
  },
  required: ["page", "limit"],
};
