import {
  CheckCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import Card from "../Card";

/* eslint-disable react/prop-types */
export default function Task({ text }) {
  return (
    <Card className="mt-5 flex justify-between">
      <p>{text}</p>
      <div className="flex gap-3">
        <CheckCircleIcon className="h-6 w-6 text-green-500" />
        <TrashIcon className="h-6 w-6 text-blue-500" />
        <PencilIcon className="h-6 w-6 text-red-500" />
      </div>
    </Card>
  );
}