import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyHome from "./components/MyHome";
import MyFooter from "./components/MyFooter";
import TVShows from "./components/TVShows";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import MyProfile from "./components/MyProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<MyHome title="Home" />} />
          <Route path="/tv-shows" element={<TVShows title="TV Shows" />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails title="Movie Details" />} />
          <Route path="/profile" element={<MyProfile title="Profile" />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
