import React from "react";

const FilterLink = ({ filter }) => null;

const Link = ({ onClick, children }) => (
  <span onClick={onClick}>{children}</span>
);

export default props => (
  <footer>
    <FilterLink filter="show_all">All</FilterLink>
    <FilterLink filter="show_active">Active</FilterLink>
    <FilterLink filter="show_completed">Completed</FilterLink>
  </footer>
);
