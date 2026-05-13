import { useState } from "react";
import "./styles.css";

// named export形式
export const Todo = () => {
  // 未完了のTODO
  const [incompleteTodos, setIncompleteTodos] = useState([
    "TODOです1",
    "TODOです2",
  ]);
  // 完了のTODO
  const [completeTodos, setcompleteTodos] = useState([
    "TODOでした1",
    "TODOでした2",
  ]);

  // 入力された内容の取得
  const [todoText, setTodoText] = useState("");

  // inputタグのonChangeイベントは入力した内容を取得する用の引数を受け取る
  const onChangeText = (event) => setTodoText(event.target.value);

  // 追加ボタンを押下
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeText}
        ></input>
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => (
            // 部分的にレンダリングする際に一つの要素にkey属性を指定すること
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => (
            // 部分的にレンダリングする際に一つの要素にkey属性を指定すること
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
