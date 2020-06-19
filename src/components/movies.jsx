import Pagination from "./common/pagination";
import Genre from "./common/genres";
import _ from "lodash";
import React, { Component } from "react";
import MovieTable from "./movieTable";
import { getGenres } from "../services/fakeGenreService";
const { getMovies } = require("../services/fakeMovieService");
const { paginate } = require("../utils/paginator");

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    itemsInAPage: 4,
    currentPage: 1,
    currentGenre: "All Genres",
    sortcolumn: { order: "asc", path: "title" },
  };
  render() {
    let {
      movies: m,
      itemsInAPage,
      currentPage,
      currentGenre: cg,
      sortcolumn,
    } = this.state;
    if (m.length === 0) return <h5>There are no movies found</h5>;
    let movies =
      cg && cg._id ? m.filter((movie) => cg._id === movie.genre._id) : m;
    let len = movies.length;
    movies = _.orderBy(movies, [sortcolumn.path], [sortcolumn.order]);

    movies = paginate(movies, currentPage, itemsInAPage);
    //if (movies.length === 0) this.setState({ currentPage: currentPage - 1 });

    return (
      <div className="row">
        <div className="col-2">
          <Genre
            changeGenre={this.handleGenre}
            items={this.state.genres}
            currentGenre={cg}
          />
        </div>
        <div className="col">
          <h5>There are {len} movies found</h5>

          <h1>These are the movies available</h1>
          <MovieTable
            movies={movies}
            onDelete={this.handleDelete}
            onLike={this.handlelike}
            onSort={this.handleSort}
            sortcolumn={sortcolumn}
          />

          <Pagination
            totalItems={len}
            pageSize={itemsInAPage}
            onPageChange={this.handlePages}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
  handleSort = (sortcolumn) => {
    this.setState({ sortcolumn });
  };

  handleDelete = (movie, movies) => {
    let movies1 = this.state.movies.filter((value) => value._id !== movie._id);
    let m = [...movies];
    console.log("");
    m.length === 0
      ? this.setState({
          movies: movies1,
          currentPage: 1,
        })
      : this.setState({ movies: movies1 });
  };
  handleGenre = (genre) => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  };
  handlelike = (movie) => {
    let movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index].liked = !movie.liked;
    this.setState({ movies });
  };
  handlePages = (page) => {
    this.setState({ currentPage: page });
  };
}
export default Movies;
