// alert('Hola G15!')
// console.log('Hola G15!')

const url = "https://dummyjson.com/products";

// function fetchProducts() {
//   const response = fetch(url); // returns a PROMISE

//   console.log(response);
// }

// async function fetchProducts() {
//   const response = await fetch(url); // returns a RESPONSE object

//   const data = response.json(); // returns a PROMISE

//   console.log(data);
// }

async function fetchProducts() {
  const response = await fetch(url);

  const data = await response.json();

  console.log(data);
}

fetchProducts();

// A Promise in JavaScript is an object that represents a value or the eventual completion (or failure) of an asynchronous operation
