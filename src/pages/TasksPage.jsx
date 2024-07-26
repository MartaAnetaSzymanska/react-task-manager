import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { TaskList } from "../components/TaskList/TaskList";
import { TaskEditor } from "../components/TaskEditor/TaskEditor";
import { fetchTasks } from "../redux/operations/tasks.operation";
import { selectLoading } from "../redux/selectors/tasks.selector";

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <TaskEditor />
      <div>{isLoading && "Request in progress..."}</div>
      <TaskList />
    </>
  );
}
