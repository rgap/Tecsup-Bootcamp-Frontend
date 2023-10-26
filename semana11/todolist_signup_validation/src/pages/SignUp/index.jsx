import { useState } from "react";
import { Button, TextField } from "../../components";
import { inputs } from "./form";

export default function SignUp() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
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

    inputs.forEach((input) => {
      if (!values[input.name]) {
        errorsEmpty[input.name] = `${input.placeholder} Invalido`;
      }
    });

    setErrors(errorsEmpty);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    validateIfValuesHasEmpty();
  };

  return (
    <div className="h-screen flex items-center justify-center max-w-md mx-auto">
      <div className="border bg-white shadow w-[90%] m-auto rounded px-5 py-2">
        <h1 className="text-2xl font-semibold my-5">Crear Cuenta</h1>
        <form
          onSubmit={handleFormSubmit}
          className="mb-5 flex flex-col gap-5"
          autoComplete="off"
        >
          {inputs.map((input) => (
            <div key={input.name}>
              <TextField
                placeholder={input.placeholder}
                value={values[input.name]}
                name={input.name}
                onChange={handleInputChange}
                type={input.type ?? "text"}
                className="rounded-r"
              />
              <span className="text-red-500 mt-1 text-xs">
                {errors[input.name]}
              </span>
            </div>
          ))}
          <Button
            text="Registrarse"
            className="rounded-l w-full"
            variant="secondary"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
