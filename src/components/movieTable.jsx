import React, { Component } from "react";
import Like from "./common/like";
import SortHeader from "./common/sortHeader";

class MovieTable extends Component {
  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;
    const column = [
      { name: "title", label: "Title" },
      { name: "numberInStock", label: "Stock Available" },
      { name: "genre.name", label: "Genre" },
      { name: "dailyRentalRate", label: "Rate" },
      { key: "like" },
      { key: "delete" },
    ];

    return (
      <table className="table table-striped">
        <SortHeader column={column} onSort={onSort} sortColumn={sortColumn} />
        <tbody>
          {movies.map((movie) => (
            <tr id="table" key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like onClick={onLike} movie={movie} />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(movie, movies)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MovieTable;
