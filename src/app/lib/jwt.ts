import { DEFAULT_SIGN_OPTION } from "@/src/consts";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface SignOption {
  expiresIn?: string | number;
}

export const signInAccessToken = (
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTION
) => {
  const secret_key = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secret_key!, options);
  return token;
};

export const verifyJwt = (token: string) => {
  try {
    const secret_key = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, secret_key!);
    return decoded as JwtPayload;
  } catch (error) {
    console.log({ error });
    return null;
  }
};
