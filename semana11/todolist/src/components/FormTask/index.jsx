import { useState } from "react";

export default function FormTask() {
  const [textTask, setTextTask] = useState("");

  const handleInputChange = (e) => {
    setTextTask(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2 className="font-semibold text-xl mt-3">Crear tu tarea</h2>
      <form className="my-5 flex items-center" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={textTask}
          onChange={handleInputChange}
          className="border w-full px-2 py-3 rounded-l outline-none"
          placeholder="Escribe tu tarea"
        />
        <button className="bg-green-400 px-2 py-3 rounded-r text-white border border-green-400">
          Crear
        </button>
      </form>
    </>
  );
}
