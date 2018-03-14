import React from "react";
import { connect } from "react-redux";

import { setVisibilityFilter } from "../actions";

const Link = ({ active, children, onClick }) => (
  <button disabled={active} onClick={onClick}>
    {children}
  </button>
);

const mapStateProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(mapStateProps, mapDispatchProps)(Link);

export default () => (
  <p>
    {"Show: "}
    <FilterLink filter="SHOW_ALL">All</FilterLink>{" "}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>{" "}
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </p>
);
