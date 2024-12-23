import { API_URL } from "../constants/index";

export enum RequestType {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export const HttpRequest = async <Req, Res>({
  url,
  method = RequestType.GET,
  body,
  isFormData,
  params,
}: {
  url: string;
  method?: RequestType | undefined;
  body?: Req | BodyInit | undefined;
  isFormData?: boolean;
  params?: Record<string, any>;
}): Promise<Res> => {
  const token = JSON.parse(window.localStorage.getItem("token") || "");
  const myHeaders = new Headers({
    Authorization: token,
    "Content-Type": "application/json",
    Accept: "application/json",
  });
  const formdataHeaders = new Headers({
    Authorization: token,
  });
  const res = await fetch(
    `${API_URL}${url}${params ? "?" + new URLSearchParams(params) : ""}`,
    {
      body: isFormData ? (body as BodyInit) : JSON.stringify(body),
      headers: isFormData ? formdataHeaders : myHeaders,
      method,
    }
  );
  if (res.status === 403) {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  const result = await res.json();
  return result;
};
