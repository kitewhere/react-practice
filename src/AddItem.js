import React from "react";

function onAddItem(e) {
  if (e.key === "Enter") {
    // persistHandle({ title: e.target.value });
    e.target.value = "";
  }
}

export default props => (
  <div>
    <input type="text" onKeyPress={addTodo} />
    <button onClick={onAddItem}>+</button>
  </div>
);
