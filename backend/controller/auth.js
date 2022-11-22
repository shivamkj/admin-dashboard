import querystring from "querystring";
import axios from "axios";
import * as jose from "jose";
import { ValidationError, ExternalServiceError } from "./errors";

const ACCESS_TOKEN_SECRET = new TextEncoder().encode(
  process.env.ACCESS_TOKEN_SECRET
);

export const loginWithGoogle = async (code) => {
  if (!code) throw new ValidationError("Token not found");

  const token = await getGoogleAuthTokens(code);
  const userDetails = await getGoogleUserDetails(token);

  if (!userDetails.email.endsWith("myysports.com")) {
    throw new ValidationError("Only Myysports users are allowed", 403);
  }

  const accessToken = await signToken({
    email: userDetails.email,
    name: userDetails.name,
    picture: userDetails.picture,
  });

  return { accessToken };
};

// Fetch the user's profile with the access token and bearer
const getGoogleUserDetails = async (tokens) => {
  try {
    const googleUser = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${tokens.id_token}`,
        },
      }
    );

    return googleUser.data;
  } catch (error) {
    console.log(error.response.data);
    throw new ExternalServiceError(
      "Couldn't fetch your Google account details. Please try again",
      500
    );
  }
};

/*
  Returns:
  Promise<{
    access_token: string;
    expires_in: Number;
    refresh_token: string;
    scope: string;
    id_token: string;
  }>
  */
const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";

const getGoogleAuthTokens = async (code) => {
  try {
    const { data } = await axios.post(
      GOOGLE_TOKEN_URL,
      querystring.stringify({
        code,
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
        grant_type: "authorization_code",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error.response.data);
    throw new ValidationError("Couldn't verify token", 403);
  }
};

export const signToken = async (data) => {
  const jwtToken = await new jose.SignJWT(data)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer("myysports.com")
    .setExpirationTime("3d")
    .sign(ACCESS_TOKEN_SECRET);

  return jwtToken;
};

export const verifyToken = async (jwtToken) => {
  try {
    const { payload } = await jose.jwtVerify(jwtToken, ACCESS_TOKEN_SECRET, {
      issuer: "myysports.com",
    });
    return payload;
  } catch (error) {
    throw new ValidationError("Couldn't verify token", 403);
  }
};
