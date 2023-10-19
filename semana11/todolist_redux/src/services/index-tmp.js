// Funciones para el CRUD
// https://65273bf0917d673fd76d82bc.mockapi.io/tasks

const URLApi = "https://65273bf0917d673fd76d82bc.mockapi.io/";

// C
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

// R
export async function read() {
  const response = await fetch(URLApi);
  const data = await response.json();
  return data;
}

// U
export async function update(id, body) {
  const response = await fetch(`${URLApi}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}

// D
