import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './MainComponents/TodoTemplate';
import TodoHead from './MainComponents/TodoHead';
import TodoList from './MainComponents/TodoList';
import TodoCreate from './MainComponents/TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </>
  )

  // 코알누 연습 //
  // const [inputValue, setInputValue] = useState('');
  // const [todoList, setTodoList] = useState([]);
  // const addItem = () => {
  //   console.log("Seongwon!!", inputValue)
  //   setTodoList([...todoList, inputValue])
  // };

  // return (
  //   <div>
  //     <input
  //       value={inputValue}
  //       type="text"
  //       onChange={(event) =>
  //         setInputValue(event.target.value)}
  //     />
  //     <button onClick={addItem}>추가</button>

  //     <TodoBoard todoList={todoList} />
  //   </div>
  // );
  // 코알누 연습 //

}

export default App;
