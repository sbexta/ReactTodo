import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import './App.css';
import { CreatedTodoButton } from './CreatedTodoButton';


const todoArray = [
  {text : 'Cortar cebolla', completed: true },
  {text : 'Tomar el curso de intro a React', completed: false },
  {text : 'Llorar con la llorona', completed: false }
]


function App() {
  return (
    <>
      <TodoCounter completed={5} total={10}/>
      <TodoSearch/>

      <TodoList>
        {todoArray.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreatedTodoButton/>      
    </>
  );
}
export default App;
