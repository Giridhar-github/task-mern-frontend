import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";
import TaskForm from "./TaskForm";
const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="mb-10">
        <h1 className="font-semibold text-slate-500">
          Welcome {user && user.name}
        </h1>
      </div>
      <h3 className="font-semibold text-2xl text-slate-500 mb-10">
        Task Dashboard
      </h3>
      <div className="my-3">
        <button
          className="border px-3 py-2 bg-emerald-500 font-semibold"
          onClick={() => navigate("/allTasks")}
        >
          Show Tasks
        </button>
      </div>
      <TaskForm />
    </div>
  );
};

export default Dashboard;
