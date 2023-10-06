// npm install -D tailwindcss --> only this will have you run "npm run dev"
// npm i tailwindcss postcss autoprefixer -D --> this is for local dev

import { useState } from "react"; // para manejo de variables

export default function Counter() {
    const [count, setCount] = useState(0)

    const substract = () => setCount(count - 1)
    const add = () => setCount(count + 1)
    const reset = () => setCount(0)

    return (
        <>
        <h2 className="bg-custom-color text-white">Mi contador {count}</h2>
        <button onClick={substract}>Substract</button>
        <button onClick={reset}>Reset</button>
        <button onClick={add}>Add</button>
        </>
    )
}