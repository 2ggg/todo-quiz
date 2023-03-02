import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      content: "react를 배워봅시다.",
    },
    {
      id: 2,
      content: "useState를 배워봅시다.",
    },
    {
      id: 3,
      content: "자바스크립트를 배워봅시다.",
    },
  ]);

  //contents, isDone
  const [content, setContent] = useState('');

  return (
    <div className='wrap'>
      <Header
        todoList={todoList}
        setTodoList={setTodoList}
        content={content}
        setContent={setContent}
      />
      <div className='card-list'>
        {
          todoList.map((item) => {
            return (
              <Card
                key={item.id}
                item={item}
              />
            )
          })
        }
      </div>
    </div>
  );
}

const Header = ({todoList, setTodoList, content, setContent}) => {
  //setContent
  const contentHandler = (event) => {
    setContent(event.target.value);
  }
  //리스트 추가
  const addListHandler = () => {
    const list = {
      id: todoList.length+1,
      content: content,
    }
    setTodoList([...todoList, list]);
  }

  return (
    <header>
      <div>
        <input 
          onChange={contentHandler}
        />
        <button onClick={addListHandler}>
          추가하기
        </button>
      </div>
      <h1>Todo List</h1>
    </header>
  );
}

const Card = ({item}) => {
  return(
    <div className='card'>
      {item.content}
    </div>
  );
}

export default App;
