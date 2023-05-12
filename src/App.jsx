import AllRoutes from "./AllRoutes";
import NavComponent from "./Components/Nav/NavComponent";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <>
      <div className="App">
        <NavComponent />
        <AllRoutes />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
