import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
function Todolist() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodo("");
    setTodos((curArr) => [toDo, ...curArr])
  }
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form action="">
        <input onChange={onChange} value={toDo} type="text" placeholder="write your to do" />
        <button onClick={onSubmit}>sub</button>
      </form>
      <hr />
      <ul>
        {
          toDos.map((v,i) => {
            return <li  key={i}>{i+1}.{v}</li>
          })
        }
      </ul>
    </div>
  );
}

export default Todolist;
