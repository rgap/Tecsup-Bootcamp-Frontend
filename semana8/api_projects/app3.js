// alert('Hola G15!')
// console.log('Hola G15!')

const urlCategories = "https://dummyjson.com/products/categories";
const urlProducts = "https://dummyjson.com/products";

function fetchCategories() {
  return fetch(urlCategories) // Returns a Promise
    .then((response) => response.json());
  // .then((data) => {
  //   console.log(data);
  // });
}

async function fetchProducts() {
  const response = await fetch(urlProducts); // returns a RESPONSE?
  const data = await response.json(); // returns an object
  console.log(data);
}

function renderCategories(categories) {
  //   console.log("Rendering categories!!", categories);
  const categoriesSection = document.querySelector(".categories");
  let categoryButtons = "";
  categories.forEach((category) => {
    categoryButtons += `<button>${category}</button>`;
  });
  categoriesSection.innerHTML = categoryButtons;
}

async function initApp() {
  const categories = await fetchCategories();
  //   console.log(categories);
  renderCategories(categories);
}

initApp();
