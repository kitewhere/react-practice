import React from "react";

function persistor(dataSet, itemCreator, row) {
  if (!row) throw new Error("passed emptry object to persistor");

  let upatedFlag = false;

  if (row.id === undefined || row.id === null) {
    // create
    delete row.id;
    return [itemCreator(...Object.values(row), dataSet), ...dataSet];
  }

  if (Object.keys(row).length === 1) {
    // remove
    dataSet = dataSet.filter(_row => {
      if (row.id === _row.id) upatedFlag = true;
      return row.id !== _row.id;
    });
  } else {
    // update
    dataSet = dataSet.map(_row => {
      if (row.id === _row.id) upatedFlag = true;
      return row.id === _row.id ? { ..._row, ...row } : _row;
    });
  }

  if (!upatedFlag) console.warn("nothing updated");

  return dataSet;
}

export default class PersistAble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSouce: this.props.dataSource,
      itemCreator: this.props.itemCreator
    };
  }

  persistHandle = item => {
    this.setState({
      dataSouce: persistor(...Object.values(this.state), item)
    });
    return true;
  };

  render() {
    return this.props.render({
      dataSource: this.state.dataSouce,
      persistHandle: this.persistHandle
    });
  }
}
