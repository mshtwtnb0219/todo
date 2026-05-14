export const InCompleteTodo = (props) => {
  const {todos, onClickComplete, onClickDelete} = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          // 部分的にレンダリングする際に一つの要素にkey属性を指定すること
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              {/* loopの際はアロー関数に関数を渡す */}
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* loopの際はアロー関数に関数を渡す */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
