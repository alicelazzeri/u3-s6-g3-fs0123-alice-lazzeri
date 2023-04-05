import { Alert, Spinner } from "react-bootstrap";
import MyHeader from "./MyHeader";
import MyMovie from "./MyMovie";
import { useEffect, useState } from "react";

const TVShows = () => {
  const [HarryPotter, setHarryPotter] = useState([]);
  const [LordOfTheRings, setLordOfTheRings] = useState([]);
  const [IndianaJones, setIndianaJones] = useState([]);
  const [Batman, setBatman] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const request = async (endpoint, setStato) => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        setStato(data.Search);
        setIsLoading(false);

        //this.setState({ [state]: data.Search, isLoading: false });
      } else {
        setError(true);
        setIsLoading(false);
      }
    } catch (error) {
      setError(true);
      setIsLoading(false);
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    request("http://www.omdbapi.com/?apikey=97b92405&s=harry%20potter&type=movie", setHarryPotter);
    request("https://www.omdbapi.com/?apikey=97b92405&s=lord%20of%20the%20rings&type=movie", setLordOfTheRings);
    request("http://www.omdbapi.com/?apikey=97b92405&s=indiana%20jones&type=movie", setIndianaJones);
    request("http://www.omdbapi.com/?apikey=97b92405&s=batman&type=movie", setBatman);
  }, []);

  return (
    <div className="container-fluid">
      <div className="text-center">
        {isLoading && !error && (
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
            {error && !isLoading && (
              <Alert variant="danger">
                {errorMsg ? errorMsg : "Something went wrong while trying to retrieve data."}
              </Alert>
            )}
            <div className="row g-1 flex-nowrap movie-list py-2">
              {HarryPotter.map(movie => (
                <MyMovie imbdID={movie.imdbID} src={movie.Poster} alt={movie.Title} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="movie-gallery mx-md-5 mb-5 mt-4">
        <h5 className="text-light mt-2 mb-2">Lord of The Rings</h5>
        <div id="trending-now">
          <div className="movie-row">
            {error && !isLoading && (
              <Alert variant="danger">
                {errorMsg ? errorMsg : "Something went wrong while trying to retrieve data."}
              </Alert>
            )}
            <div className="row g-1 flex-nowrap movie-list py-2">
              {LordOfTheRings.map(movie => (
                <MyMovie imbdID={movie.imdbID} src={movie.Poster} alt={movie.Title} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="movie-gallery mx-md-5 mb-5 mt-4">
        <h5 className="text-light mt-2 mb-2">Indiana Jones</h5>
        <div id="trending-now">
          <div className="movie-row">
            {error && !isLoading && (
              <Alert variant="danger">
                {errorMsg ? errorMsg : "Something went wrong while trying to retrieve data."}
              </Alert>
            )}
            <div className="row g-1 flex-nowrap movie-list py-2">
              {IndianaJones.map(movie => (
                <MyMovie imbdID={movie.imdbID} src={movie.Poster} alt={movie.Title} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="movie-gallery mx-md-5 mb-5 mt-4">
        <h5 className="text-light mt-2 mb-2">Batman</h5>
        <div id="trending-now">
          <div className="movie-row">
            {error && !isLoading && (
              <Alert variant="danger">
                {errorMsg ? errorMsg : "Something went wrong while trying to retrieve data."}
              </Alert>
            )}
            <div className="row g-1 flex-nowrap movie-list py-2">
              {Batman.map(movie => (
                <MyMovie imbdID={movie.imdbID} src={movie.Poster} alt={movie.Title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShows;
