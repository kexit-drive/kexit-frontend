import { PUBLIC_BASE_URL } from "$env/static/public";

export async function fetchService(url, method, requestOptions={}) {
  const defaultRequestOptions = {
    method,
    redirect: "follow",
    credentials: "include",
  }
  const response = await fetch(`${PUBLIC_BASE_URL}${url}`, { ...defaultRequestOptions, ...requestOptions });
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.status);
}
