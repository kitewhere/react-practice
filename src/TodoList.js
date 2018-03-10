import React from "react";
import TodoItem from "./TodoItem";

export default props => {
  const { dataSource, persistHandle } = props;

  function renderItem(item) {
    return <TodoItem key={item.id} item={item} persistHandle={persistHandle} />;
  }

  function addTodo(e) {
    if (e.key === "Enter") {
      persistHandle({ title: e.target.value });
      e.target.value = "";
    }
  }

  return (
    <ul>
      <li>
        <input type="text" onKeyPress={addTodo} />
      </li>
      {dataSource.map(renderItem)}
    </ul>
  );
};

