import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";
class Genre extends Component {
  state = {
    genres: getGenres(),
  };

  render() {
    return this.state.genres.map((genre) => (
      <ul className="list-group">
        <li className="list-group-item">{genre.name}</li>
      </ul>
    ));
  }
}

export default Genre;
