const baseUrl = "https://65273bf0917d673fd76d82bc.mockapi.io/";

export async function makeHttpRequest({ url, id, body, method = "GET" }) {
  const finalUrl = id ? `${url}/${id}` : url;
  // console.log("url", url);
  // console.log("finalUrl", finalUrl);
  console.log(`${baseUrl}${finalUrl}`);

  const response = await fetch(`${baseUrl}${finalUrl}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
}
