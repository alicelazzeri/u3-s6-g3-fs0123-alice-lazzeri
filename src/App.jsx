import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyHome from "./components/MyHome";
import MyFooter from "./components/MyFooter";
//import MyProfile from "./components/MyProfile";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      {/* <MyProfile /> */}
      <MyHome />
      <MyFooter />
    </div>
  );
}

export default App;
