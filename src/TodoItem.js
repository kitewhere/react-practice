import React from "react";
import classnames from "classnames";

export default ({ item: { id, title, completed }, persistHandle }) => {
  function handleChange(e) {
    persistHandle({ id, completed: !completed });
  }

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={handleChange} />
      <label className={classnames({ completed })}>
        {id} - {title}
      </label>
    </li>
  );
};
