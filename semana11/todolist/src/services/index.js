// Funciones para el CRUD
// https://65273bf0917d673fd76d82bc.mockapi.io/tasks

const URLApi = "https://65273bf0917d673fd76d82bc.mockapi.io/tasks";

export async function create(body) {
  //   const response = await fetch(URLApi, { method: "POST", body: body });
  const response = await fetch(URLApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // required header
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return data;
}
