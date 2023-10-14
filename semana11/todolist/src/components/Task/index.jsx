import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Card, Edit } from "../../components";

/* eslint-disable react/prop-types */
export default function Task({ task }) {
  return (
    <Card className="mt-5 flex justify-between">
      <p>{task.text}</p>
      <div className="flex gap-3">
        <CheckCircleIcon className="h-6 w-6 text-green-500" />
        <Edit task={task} />
        <TrashIcon className="h-6 w-6 text-blue-500" />
      </div>
    </Card>
  );
}
