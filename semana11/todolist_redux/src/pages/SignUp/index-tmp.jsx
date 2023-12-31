import { useState } from "react";
import { Button, Card, TextField } from "../../components";

export default function SignUp() {
  // const [name, setName] = useState("")
  // const [lastName, setLastName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const validateIfValuesHasEmpty = () => {
    const errorsEmpty = {};

    Object.entries(values)
      .map(([key, value]) => !value && key)
      .filter((value) => value)
      .forEach((empty) => {
        errorsEmpty[empty] = "Campo vacio";
      });

    setErrors(errorsEmpty);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    validateIfValuesHasEmpty();
  };

  // array destructuration
  // const nombres = ["Juana", "Pepe"]
  // const [nombre, name2] = nombres
  /////////

  // const validateIfValuesHasEmpty

  // spread operator
  // const values2 = { ...values, name="Lucas" };

  // Para hacer key dinamico, como parametro:
  // function setKey(key, value)  {
  //   return {
  //     [key]: value
  //   }
  // }
  // setKey("name", "Juan")
  // setKey("address", "av. mu casa 123")

  return (
    <div className="h-screen flex items-center justify-center max-w-md mx-auto">
      <Card>
        <h1 className="text-2xl font-semibold my-5">Crear Cuenta</h1>
        <form onSubmit={handleFormSubmit} className="mb-5 flex flex-col gap-5">
          <div>
            <TextField
              placeholder="Ingrese su nombre"
              value={values.name}
              name="name"
              onChange={handleInputChange}
            />
            <span className="text-red-500 mt-1">{errors.name}</span>
          </div>
          <TextField
            placeholder="Ingrese su apellido"
            value={values.lastname}
            name="lastname"
            onChange={handleInputChange}
          />
          {errors.lastname}
          <TextField
            placeholder="Ingrese su email"
            type="email"
            value={values.email}
            name="email"
            onChange={handleInputChange}
          />
          {errors.email}
          <TextField
            placeholder="Ingrese su password"
            type="password"
            value={values.password}
            name="password"
            onChange={handleInputChange}
          />
          {errors.password}
          <Button
            text="Crear cuenta"
            className="rounded-l w-full"
            variant="secondary"
            type="submit"
          />
        </form>
      </Card>
    </div>
  );
}
