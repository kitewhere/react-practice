import React from "react";
import { render } from "react-dom";
import TodoList from "./TodoList";
import PersistAble from "./PersistAble";
import todos from "../todos.json";

function renderList({ dataSource, persistHandle }) {
  return <TodoList dataSource={dataSource} persistHandle={persistHandle} />;
}

function createTodoFrom(title, dateSet) {
  return {
    id: dateSet.length + 1,
    title,
    completed: false
  };
}

const App = () => (
  <div>
    <PersistAble
      dataSource={todos}
      itemCreator={createTodoFrom}
      render={renderList}
    />
  </div>
);

render(<App />, document.getElementById("root"));
