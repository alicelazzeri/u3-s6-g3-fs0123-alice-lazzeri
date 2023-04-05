import { Component } from "react";

class MyMovie extends Component {
  render() {
    return (
      <div className="col-6 col-md-3 col-lg-2">
        <img className="img-fluid movie-cover" src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}

export default MyMovie;
