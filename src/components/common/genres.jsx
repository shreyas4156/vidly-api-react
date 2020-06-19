import React from "react";

const Genre = (props) => {
  const {
    items,
    changeGenre,
    currentGenre,
    textProperty,
    valueProperty,
  } = props;
  return (
    <ul className="list-group">
      {items.map((genre) => (
        <li
          className={
            currentGenre.name === genre.name
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer" }}
          key={genre[valueProperty]}
          onClick={() => changeGenre(genre)}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};
Genre.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default Genre;
