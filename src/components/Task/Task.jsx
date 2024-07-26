import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/operations/tasks.operation";
import css from "./Task.module.scss";

export const Task = ({ id, text }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
Task.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
};
