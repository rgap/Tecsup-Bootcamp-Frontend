import { useEffect, useState } from "react";
import { Card, FormTask, Task } from "../../components";
import { read } from "../../services";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const response = await read("tasks");
    setTasks(response);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="mt-10">
      <Card>
        <FormTask getTasks={getTasks} />
      </Card>
      {tasks.length > 0 &&
        tasks.map((task) => (
          <Task key={task.id} task={task} getTasks={getTasks} />
        ))}
    </div>
  );
}
