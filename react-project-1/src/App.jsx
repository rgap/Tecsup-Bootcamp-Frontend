import { useState } from "react";
import { Footer, Header } from "./components";

export default function App() {

  const [name, setName] = useState("")

  return (
    <>
      <Header />
      <h1>Mi primer componente</h1>
      <div>
        <h1>Otro div</h1>
      </div>
      <Footer />
    </>
  );
}