import { FaCheckCircle, FaRegCircle, FaTrash } from "react-icons/fa";


function TodoItem (props) {
  return(
    <li className={props.completed ? "completed" : ""}>
  <span className="icon">
    {props.completed ? <FaCheckCircle /> : <FaRegCircle />}
  </span>

  <p>{props.text}</p>

  <span className="icon delete">
    <FaTrash />
  </span>
</li>

  );
}

export {TodoItem};