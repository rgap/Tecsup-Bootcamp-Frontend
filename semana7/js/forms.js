const form = document.querySelector("#form-register");
// console.log(form)

/**\
 * los formularios tienen un evento especial unico "onsubmit"
 * onsubmit tiene un parametro llamado event
 */

form.onsubmit = function (event) {
  // funcion para evitar que el navegador se recargue cuando es un form
  event.preventDefault();
  // console.log("Esto funciona")
  //   console.log(event.target);
  //   console.log(event.target[0].value);
  //   console.log(Array.from(event.target).map((item) => item.value));
//   const inputs = event.target;
  const inputs = document.querySelectorAll("input");

  const values = {};

  for (const input of inputs) {
    // console.log(input.name, input.value);
    values[input.name] = input.value
  }
  console.log(values)
};
