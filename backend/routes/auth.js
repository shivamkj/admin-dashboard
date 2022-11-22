import { loginWithGoogle } from "../controller/auth";

const THREE_DAY_SECONDS = 259200;

export const authRoutes = [
  {
    method: "POST",
    url: "/auth/login",
    handler: async (request, response) => {
      const { accessToken } = await loginWithGoogle(request.body.token);
      // TODO: Add Secure also;
      response.setHeader(
        "Set-Cookie",
        `auth=${accessToken}; HttpOnly; Max-Age=${THREE_DAY_SECONDS}; Path=/;`
      );

      return { success: true };
    },
  },
  {
    method: "POST",
    url: "/auth/logout",
    handler: async (_, response) => {
      response.setHeader(
        "Set-Cookie",
        "auth=; Max-Age=0;"
      );

      return { success: true };
    },
  },
];
