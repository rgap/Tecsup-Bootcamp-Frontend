const baseUrl = "https://65360434c620ba9358ecdf3c.mockapi.io/";

export async function makeHttpRequest({ url, id, body, method = "GET" }) {
  const endPoint = id ? `${url}/${id}` : url;
  console.log(`${baseUrl}${endPoint}`);

  const response = await fetch(`${baseUrl}${endPoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return data;
}
