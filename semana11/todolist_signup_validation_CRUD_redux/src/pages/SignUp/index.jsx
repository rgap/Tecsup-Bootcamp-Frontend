import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "../../components";
import { create, read } from "../../services";
import { saveUser } from "../../slices/userSlice";
import { inputs } from "./form";

export default function SignUp() {
  const dispatch = useDispatch();

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

    const validations = {
      name: (value) => {
        if (!value.trim()) {
          return `No puede ser solo espacios en blanco`;
        } else if (value.trim().length < 3) {
          return `El nombre debe tener al menos 3 caracteres`;
        }
      },
      email: (value) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(value)) {
          return `Formato de correo invalido`;
        }
      },
      password: (value) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(value)) {
          return `Debe tener al menos 8 caracteres, una letra y un número`;
        }
      },
    };

    inputs.forEach((input) => {
      const value = values[input.name];

      if (value === "") {
        errorsEmpty[input.name] = `Este campo no puede estar vacio`;
      } else if (validations[input.name]) {
        const errorMessage = validations[input.name](value);
        if (errorMessage) {
          errorsEmpty[input.name] = errorMessage;
        }
      }
    });

    setErrors(errorsEmpty);
    // Return true if there are no errors, otherwise return false
    return Object.keys(errorsEmpty).length === 0;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(values);

    // Only proceed with creating if the form is valid
    if (validateIfValuesHasEmpty()) {
      // Fetch all users
      const users = await read("users");
      // Check if email already exists
      const emailExists = users.some((user) => user.email === values.email);
      if (emailExists) {
        // Update the errors state to show an email exists error
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Ya existe un usuario con ese correo",
        }));
      } else {
        // Register new user
        const user = await create(values, "users");
        console.log(user);
        // dispatches saveUser(user) to the Redux store.
        // saveUser updates the state with the new user data: user
        // and saves the user data to local storage
        dispatch(saveUser(user));
      }
    }
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
                // type={input.type ?? "text"}
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
