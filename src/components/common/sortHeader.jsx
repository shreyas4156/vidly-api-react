import React, { Component } from "react";

class SortHeader extends Component {
  raiseSort = (path) => {
    const sortcolumn = { ...this.props.sortcolumn };
    if (path === sortcolumn.path) {
      console.log(sortcolumn.path);
      sortcolumn.order = sortcolumn.order === "asc" ? "desc" : "asc";
    } else {
      sortcolumn.path = path;
      sortcolumn.order = "asc";
    }
    this.props.onSort(sortcolumn);
  };
  render() {
    const { column } = this.props;
    return (
      <thead>
        <tr>
          {column.map((value) => (
            <th
              onClick={() => this.raiseSort(value.name)}
              key={value.name || value.key}
            >
              {value.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default SortHeader;
