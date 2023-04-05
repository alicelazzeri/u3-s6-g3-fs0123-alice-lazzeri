import { useEffect, useState } from "react";
import { Alert, Badge, Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const request = async endpoint => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        setMovie(data);
        setIsLoading(false);
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
    request(`http://www.omdbapi.com/?apikey=97b92405&i=${params.movieId}`);
  }, []);
  return (
    <Container fluid className="text-light">
      {isLoading && !error && (
        <Spinner animation="border" variant="danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {error && !isLoading && (
        <Alert variant="danger">{errorMsg ? errorMsg : "Something went wrong while trying to retrieve data."}</Alert>
      )}
      <img src={movie.Poster} alt="img" />
      <Row>
        <Col>
          {error && !isLoading && (
            <Alert variant="danger">
              {errorMsg ? errorMsg : "Something went wrong while trying to retrieve data."}
            </Alert>
          )}
          <p>{movie.Title}</p>
          <p>{movie.Genre}</p>
          <p>{movie.Plot}</p>
          <Badge variant="danger">{movie.imbdRating}</Badge>
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;
