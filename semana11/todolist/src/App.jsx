import { Card } from "./components";
// import Card from "./components"; this gives an error
import { FormTask, Task } from "./components";

export default function App() {
  return (
    <div className="mt-10">
      <Card>
        <FormTask />
      </Card>
      <Task text="Laver servicios" />
      <Task text="Hacer el reto" />
    </div>
  );
}
