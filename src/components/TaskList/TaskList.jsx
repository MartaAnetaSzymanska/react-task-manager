import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import { selectAllTasks } from "../../redux/selectors/tasks.selector";
import css from "./TaskList.module.scss";

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul className={css.list}>
      {tasks.map(({ id, text }) => (
        <li key={id}>
          <Task id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};
