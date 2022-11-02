import * as dotenv from "dotenv";
dotenv.config({ path: "../" });

import Fastify from "fastify";
import { apiRoutes } from "./routes/index.js";
import { paginationSchema } from "./routes/shared.js";

const fastify = Fastify({ logger: true });

// register routes with fastify
for (const route of apiRoutes) {
  fastify.route(route);
}

// add common schemas
fastify.addSchema(paginationSchema);

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
