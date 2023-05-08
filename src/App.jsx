import AllRoutes from "./Components/AllRoutes";
import NavComponent from "./Components/Nav/NavComponent";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Landing from "./Components/Landing/Landing";
import DashBoard from "./Components/DashBoard/DashBoard";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <>
      <div className="App">
        <NavComponent />
        <AllRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
