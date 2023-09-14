const form = document.querySelector("#form-register");

function verifyIfEmptyInput(element) {
  const ifPAfterInput = document.querySelector(`#${element.name}`) // back ticks

  if (element.value.length > 0) {
    element.classList.remove("border", "border-red-500")
    ////////////////////////////////////////////////////////////////
    // ifPAfterInput.style.display = 'none'
    if (ifPAfterInput) ifPAfterInput.remove()
    // (!ifPAfterInput ?? defaultElement).remove()
    // ifPAfterInput?.remove();
    
    ////////////////////////////////////////////////////////////////
  } else {
    if (element.dataset.validation !== "false") return 

    element.classList.add("border", "border-red-500");

    // Antes de agregar esto debemos verificar si es que existe
    if (!ifPAfterInput) {
      // Agregar un <p></p> despues del input
      const p = document.createElement("p") // <p></p>
      p.textContent = "Completa este campo" 
      p.setAttribute("id", element.name) // id = full-name
      p.classList.add("mt-1", "text-xs", "text-red-500")
      element.after(p)
    }
  }
}

form.onsubmit = function (event) {
  // Existe una funcion que nos permite evitar que el navegador
  // se recargue cuando es un formulario
  event.preventDefault();

  const inputs = document.querySelectorAll("input");
  const values = {};

  for (const input of inputs) {
    values[input.name] = input.value;
    verifyIfEmptyInput(input)
  }

  // vamos a guardar los valores del objeto en un array y verificar si alguno esta vacio
  const inputValues = Object.values(values);

  const validacion = inputValues.find((value) => !value);

  if (typeof validacion === "string") {
    alert("Completo todos los campos");
    return;
  }
};



// const form = document.querySelector("#form-register");
// // console.log(form)

// /**\
//  * los formularios tienen un evento especial unico "onsubmit"
//  * onsubmit tiene un parametro llamado event
//  */

// form.onsubmit = function (event) {
//   // funcion para evitar que el navegador se recargue cuando es un form
//   event.preventDefault();
//   // console.log("Esto funciona")
//   //   console.log(event.target);
//   //   console.log(event.target[0].value);
//   //   console.log(Array.from(event.target).map((item) => item.value));
// //   const inputs = event.target;
//   const inputs = document.querySelectorAll("input");

//   const values = {};

//   for (const input of inputs) {
//     // console.log(input.name, input.value);
//     values[input.name] = input.value
//   }
//   // Object.values gets values from an object
//   console.log(Object.values(values));
//   const inputValues = Object.values(values)

//   const validacion = inputValues.find((value) => !value)
//   const validacion2 = inputValues.every((value) => value !== "")
//   console.log(typeof validacion)

//   // when it is empty => typeof validacion = "string"
//   // when it is not empty => undefined
//   if (typeof validacion === "string") {
//     alert("Complete todos los campos ")
//     return;
//   }


// };
