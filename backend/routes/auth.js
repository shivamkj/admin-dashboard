import { loginWithGoogle } from "../controller/auth";

const THREE_DAY_SECONDS = 259200;

export const authRoutes = [
  {
    method: "POST",
    url: "/auth/login",
    handler: async (request, response) => {
      const { accessToken } = await loginWithGoogle(request.body.token);

      response.setHeader(
        "Set-Cookie",
        `auth=${accessToken}; HttpOnly; Secure; Max-Age=${THREE_DAY_SECONDS}`
      );
      return { accessToken };
    },
  },
];
