import url from "url";
import queryString from "query-string";
import { match } from "path-to-regexp";
import { apiRoutes } from "./../../backend/routes/index.js";

const init = () => {
  for (const route of apiRoutes) {
    if (route.url.includes(":")) {
      route.parsePathParams = match(route.url, { decode: decodeURIComponent });
      route.hasPathParams = true;
    }
  }
};

init();

export default async function handler(request, response) {
  // check for authentication
  if (request.headers.authorization != process.env.JWT_SECRET) {
    return response.status(401).json({ message: "unauthorized" });
  }

  // parse path params & query param from the request url
  const parsedUrl = url.parse(request.url);
  const path = parsedUrl.pathname.substring(4);
  if (parsedUrl.query != null) {
    request.query = queryString.parse(parsedUrl.query, { parseNumbers: true });
  }

  // loop through all routes and check if any route matches the request
  for (const route of apiRoutes) {
    // stop if method is different
    if (route.method != request.method) continue;

    // stop if route doesn't matches
    if (route.hasPathParams) {
      const matchResult = route.parsePathParams(path);
      if (matchResult == false) continue;
      request.params = matchResult.params; // add path params to request object
    } else if (route.url != path) {
      continue;
    }

    // if both route and body matches then control comes here
    const responseBody = await route.handler(request, response);
    return response.status(200).json(responseBody);
  }

  // return 404 if no route matches
  response.status(404).json({ message: "Not Found" });
}
