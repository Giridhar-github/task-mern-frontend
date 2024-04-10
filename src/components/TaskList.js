import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTasks, reset } from "../features/task/taskSlice";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tasks, isLoading, isError, message } = useSelector(
    (state) => state.task
  );
  useEffect(() => {
    if (isError) console.log(message);
    dispatch(getTasks());
    return () => dispatch(reset()); // ---------------continue from page 241
  }, [navigate, isError, message, dispatch]);
  return (
    <div className="w-full px-9 py-6">
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="flex justify-center flex-wrap">
          {tasks.length > 0 && (
            <div className="flex gap-4">
              {tasks.map((task) => (
                <TaskItem key={task._id} task={task} />
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default TaskList;
