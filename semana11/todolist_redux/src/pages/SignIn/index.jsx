/*eslint-disable no-unused-vars */
import { useState } from "react";
import { Card, Form } from "../../components";
import { inputs } from "./form";

export default function SignIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <div className="h-screen flex items-center pl-20  bg-[url('/background.jpg')] bg-no-repeat bg-center bg-cover">
        <Card className="max-w-md mx-0">
          <h1 className="text-3xl mt-5 mb-3">Login</h1>
          <p className="mb-5">Welcome back! Inicia sesión</p>
          <Form
            inputs={inputs}
            values={values}
            errors={errors}
            textButton="Iniciar Sesión"
          />
        </Card>
      </div>
    </>
  );
}
