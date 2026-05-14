import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { InCompleteTodo } from "./components/inCompleteTodo";
import { CompleteTodo } from "./components/completeTodo";

// named export形式
export const Todo = () => {
  // 未完了のTODO
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  // 完了のTODO
  const [completeTodos, setcompleteTodos] = useState([]);
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

  // 削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // 特定の要素から何個削除するか?
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタン
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };

  // 戻すボタン
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setcompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  };

  // 登録数の判定
  const disabled = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeText}
        onClick={onClickAdd}
        disabled={disabled}
      />
      {disabled && (
        <p style={{ color: "red" }}>登録できる上限は5個まで</p>
      )}

      <InCompleteTodo
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodo todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
