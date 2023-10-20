// Custom hook. this constains all the logic
import { useState } from "react";

export function useForm() {
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
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
    const empties = Object.keys(values)
      .filter((value) => !values[value])
      .map((value) => [value, "Este campo es requerido"]);

    if (empties.length === 0) {
      setErrors({});
      return;
    }

    setErrors(Object.fromEntries(empties));
  };

  return {
    values,
    errors,
    handleInputChange,
    validateIfValuesHasEmpty,
  };
}
