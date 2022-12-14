import { RemoteDataResult } from "aidbox-react/lib/libs/remoteData";
import { resetInstanceToken } from "aidbox-react/lib/services/instance";
import { service } from "aidbox-react/lib/services/service";
import { Token } from "aidbox-react/lib/services/token";
import { uuid4 } from "aidbox-react/lib/utils/uuid";

export interface AppToken extends Token {
  userinfo: any;
}

export interface SigninBody {
  email: string;
  password: string;
}

export function signin(data: SigninBody): Promise<RemoteDataResult<AppToken>> {
  return service({
    url: "/auth/token",
    method: "POST",
    data: {
      username: data.email,
      password: data.password,
      client_id: "test-client",
      client_secret: "verysecret",
      grant_type: "password",
    },
  });
}

export const setToken = (token: Token) => {
  localStorage.setItem("token", token.access_token);
};

export async function getUserInfo() {
  return service({
    method: "GET",
    url: "/auth/userinfo",
  });
}

export function getToken() {
  return localStorage.getItem("token") || undefined;
}

export function removeToken() {
  localStorage.removeItem("token");
}

export function setSessionId() {
  const id = uuid4();
  sessionStorage.setItem("sessionId", JSON.stringify(id));
}

export function getSessionid() {
  return sessionStorage.getItem("sessionId") || undefined;
}

export function removeSessionId() {
  sessionStorage.removeItem("sessionId");
}

export function baseLogout() {
  resetInstanceToken();
  removeToken();
  removeSessionId();
  window.location.href = "/";
}
