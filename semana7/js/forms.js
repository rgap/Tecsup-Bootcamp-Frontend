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
  // Object.values gets values from an object
  console.log(Object.values(values));
  const inputValues = Object.values(values)

  const validacion = inputValues.find((value) => !value)
  const validacion2 = inputValues.every((value) => value !== "")
  console.log(typeof validacion)

  // when it is empty => typeof validacion = "string"
  // when it is not empty => undefined
  if (typeof validacion === "string") {
    alert("Complete todos los campos ")
    return;
  }


};
