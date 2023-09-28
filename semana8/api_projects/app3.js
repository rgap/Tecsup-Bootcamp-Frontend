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
  //   console.log(data);
}

async function fetchProductsByCategory(categoryName) {
  const url = `https://dummyjson.com/products/category/${categoryName}`;

  const response = await fetch(url);

  const data = await response.json();

  return data;
}

function renderCategories(categories) {
  // console.log("Rendering categories!!", categories);
  const categoriesSection = document.querySelector(".categories");
  let categoryButtons = "";
  categories.forEach((category) => {
    categoryButtons += `<button>${category}</button>`;
  });
  categoriesSection.innerHTML = categoryButtons;

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      const textButton = event.target.textContent;
      //   console.log(textButton);

      const products = await fetchProductsByCategory(textButton);
      //   console.log(products);

      renderProducts(products.products);
    });
  });
}

function renderProducts(products) {
  //   console.log(products);

  const productsSection = document.querySelector(".products");

  let productsList = "";

  products.forEach((product) => {
    productsList += `
      <article class="product">
        <img class="product__image" src="${product.thumbnail}" />
        <div class="product__description">
          <h2 class="product__title">${product.title}</h2>
          <p class="product__price">S/ ${product.price}</p>
        </div>
      </article>
    `;
  });

  productsSection.innerHTML = productsList;
}

async function initApp() {
  const categories = await fetchCategories();
  // console.log(categories);
  renderCategories(categories);
}

initApp();
