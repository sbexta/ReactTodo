import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import './App.css';
import { CreatedTodoButton } from './CreatedTodoButton';


function App() {
  return (
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

      <CreatedTodoButton/>      
    </div>
  );
}
export default App;
