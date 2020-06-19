import React, { Component } from "react";
class Like extends Component {
  state = {};
  liked = () => {
    let like = "fa fa-heart";
    return this.props.movie.liked ? like + "" : like + "-o";
  };
  render() {
    return (
      <i
        className={this.liked()}
        aria-hidden="true"
        onClick={() => this.props.onClick(this.props.movie)}
        style={{
          cursor: "pointer",
          color: () => {
            return this.props.movie.liked === true ? "#E41B17" : "red";
          },
        }}
      ></i>
    );
  }
}

export default Like;
