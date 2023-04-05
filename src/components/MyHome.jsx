import { Component } from "react";
import { Alert, Spinner } from "react-bootstrap";
import MyHeader from "./MyHeader";
import MyMovie from "./MyMovie";

class MyHome extends Component {
  state = {
    HarryPotter: [],
    LordOfTheRings: [],
    IndianaJones: [],
    Batman: [],
    error: false,
    errorMsg: "",
    isLoading: true,
  };

  request = async (endpoint, state) => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        this.setState({ [state]: data.Search, isLoading: false });
      } else {
        this.setState({ error: true, isLoading: false });
      }
    } catch (error) {
      this.setState({ error: true, errorMsg: error.message, isLoading: false });
    }
  };

  componentDidMount() {
    this.request("http://www.omdbapi.com/?apikey=97b92405&s=harry%20potter&type=movie", "HarryPotter");
    this.request("https://www.omdbapi.com/?apikey=97b92405&s=lord%20of%20the%20rings&type=movie", "LordOfTheRings");
    this.request("http://www.omdbapi.com/?apikey=97b92405&s=indiana%20jones&type=movie", "IndianaJones");
    this.request("http://www.omdbapi.com/?apikey=97b92405&s=batman&type=movie", "Batman");
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="text-center">
          {this.state.isLoading && !this.state.error && (
            <Spinner animation="border" variant="danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </div>

        <MyHeader />
        <div className="movie-gallery mx-md-5 mb-5 mt-4">
          <h5 className="text-light mt-2 mb-2">Harry Potter</h5>
          <div id="trending-now">
            <div className="movie-row">
              {this.state.error && !this.state.isLoading && (
                <Alert variant="danger">
                  {this.state.errorMsg ? this.state.errorMsg : "Something went wrong while trying to retrieve data."}
                </Alert>
              )}
              <div className="row g-1 flex-nowrap movie-list py-2">
                {this.state.HarryPotter.map(movie => (
                  <MyMovie key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="movie-gallery mx-md-5 mb-5 mt-4">
          <h5 className="text-light mt-2 mb-2">Lord of The Rings</h5>
          <div id="trending-now">
            <div className="movie-row">
              {this.state.error && !this.state.isLoading && (
                <Alert variant="danger">
                  {this.state.errorMsg ? this.state.errorMsg : "Something went wrong while trying to retrieve data."}
                </Alert>
              )}
              <div className="row g-1 flex-nowrap movie-list py-2">
                {this.state.LordOfTheRings.map(movie => (
                  <MyMovie key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="movie-gallery mx-md-5 mb-5 mt-4">
          <h5 className="text-light mt-2 mb-2">Indiana Jones</h5>
          <div id="trending-now">
            <div className="movie-row">
              {this.state.error && !this.state.isLoading && (
                <Alert variant="danger">
                  {this.state.errorMsg ? this.state.errorMsg : "Something went wrong while trying to retrieve data."}
                </Alert>
              )}
              <div className="row g-1 flex-nowrap movie-list py-2">
                {this.state.IndianaJones.map(movie => (
                  <MyMovie key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="movie-gallery mx-md-5 mb-5 mt-4">
          <h5 className="text-light mt-2 mb-2">Batman</h5>
          <div id="trending-now">
            <div className="movie-row">
              {this.state.error && !this.state.isLoading && (
                <Alert variant="danger">
                  {this.state.errorMsg ? this.state.errorMsg : "Something went wrong while trying to retrieve data."}
                </Alert>
              )}
              <div className="row g-1 flex-nowrap movie-list py-2">
                {this.state.Batman.map(movie => (
                  <MyMovie key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyHome;
