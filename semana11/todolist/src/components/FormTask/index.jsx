import { useState } from "react";
import Swal from "sweetalert2";
import { TextField } from "../../components";
import { create } from "../../services";

/* eslint-disable react/prop-types */
export default function FormTask({ getTasks }) {
  const [textTask, setTextTask] = useState("");

  const handleInputChange = (e) => {
    setTextTask(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!textTask) {
      Swal.fire({
        title: "Error",
        text: "Completa el campo",
        icon: "error",
        // confirmButtonColor: "#f01",
      });
      return;
    }

    const response = await create({
      text: textTask,
      status: "created",
    });
    // console.log(response);

    setTextTask("");

    Swal.fire({
      title: "Success",
      text: "Se creó la tarea correctamente",
      icon: "success",
    });

    await getTasks();
  };

  return (
    <>
      <h2 className="font-semibold text-xl mt-3">Crear tu tarea</h2>
      <form className="my-5 flex items-center" onSubmit={handleFormSubmit}>
        <TextField value={textTask} onChange={handleInputChange} />

        <button className="bg-green-400 px-2 py-3 rounded-r text-white border border-green-400">
          Crear
        </button>
      </form>
    </>
  );
}

/* <input
          type="text"
          value={textTask}
          onChange={handleInputChange}
          className="border w-full px-2 py-3 rounded-l outline-none"
          placeholder="Escribe tu tarea"
        /> */
