import querystring from "querystring";
import crypto from "crypto";
import { REDIRECT_URI } from "../backend/controller/auth";

const getGoogleAuthURL = () => {
  const options = {
    redirect_uri: REDIRECT_URI,
    client_id: process.env.GOOGLE_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  console.log(`${rootUrl}?${querystring.stringify(options)}`);
};

const generateKeys = () => {
  console.table({ key: crypto.randomBytes(32).toString("hex") });
};

getGoogleAuthURL();
// generateKeys();
