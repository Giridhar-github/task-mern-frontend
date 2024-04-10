import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../features/task/taskSlice";
import { useNavigate } from "react-router-dom";
const TaskForm = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask({ text }));
    setText("");
    navigate('/alltasks')
  };
  //--------------------------------------------------continue from page no 226-----------------------------------------------------
  return (
    <section className="border-2 p-6">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label className="text-slate-700 font-semibold text-2xl mb-3">
            Task
          </label>
          <input
            className="border px-4 py-3 w-96"
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your task"
          />
        </div>
        <div className="flex justify-center mt-9">
          <button
            type="submit"
            className="border px-6 py-3 font-semibold border-black hover:bg-black hover:text-white transition-all delay-75"
          >
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};

export default TaskForm;
