import React from "react";
import { BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/task/taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className="border px-4 py-5 w-72 rounded-md">
      <div className=" text-slate-500 text-sm text-right border-b   ">
        {new Date(task.createdAt).toLocaleString("en-US")}
      </div>
      <h2 className="text-3xl mt-4">{task.text}</h2>
      <div className="flex justify-end mt-5">
        <button
          className="border px-2 py-2 bg-red-700 text-white font-semibold rounded-full"
          onClick={() => dispatch(deleteTask(task._id))}
        >
          {" "}
          <BiTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
