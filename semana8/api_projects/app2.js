// alert('Hola G15!')
// console.log('Hola G15!')

const urlCategories = "https://dummyjson.com/products/categories";
const urlProducts = "https://dummyjson.com/products";

function fetchCategories() {
  fetch(urlCategories) // Returns a Promise
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

// async function fetchCategories() {
//   const response = await fetch(urlCategories); // returns a RESPONSE?

//   const data = await response.json(); // returns an object

//   console.log(data);
// }

async function fetchProducts() {
  const response = await fetch(urlProducts); // returns a RESPONSE?

  const data = await response.json(); // returns an object

  console.log(data);
}

fetchCategories();
fetchProducts();
