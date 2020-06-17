import Pagination from "../common/pagination";
import Genre from "../common/genres";
import React, { Component } from "react";
import Like from "../common/like";
const { getMovies } = require("../services/fakeMovieService");
const { paginate } = require("../utils/paginator");

class Movies extends Component {
  state = {
    movies: getMovies(),
    itemsInAPage: 4,
    currentPage: 1,
  };
  render() {
    let { movies, itemsInAPage, currentPage } = this.state;
    const { length } = this.state.movies;
    if (length === 0) return <h5>There are no movies found</h5>;
    movies = paginate(movies, currentPage, itemsInAPage);
    // if (movies.length === 0) this.setState({ currentPage: currentPage - 1 });

    return (
      <div className="row">
        <div className="col-2">
          <Genre />
        </div>
        <div className="col">
          <h5>There are {this.state.movies.length} movies found</h5>

          <h1>These are the movies available</h1>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Number in stock</th>
                <th>Genre</th>
                <th>Daily Rental Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr id="table" key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like onClick={this.handlelike} movie={movie} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.handleDelete(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            totalItems={length}
            pageSize={itemsInAPage}
            onPageChange={this.handlePages}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
  handleDelete(movie, currentPage) {
    let movies1 = this.state.movies.filter((value) => value._id !== movie._id);
    this.setState({ movies: movies1 });
  }

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
