import AllRoutes from "./AllRoutes";
import NavComponent from "./Components/Nav/NavComponent";
import Landing from "./Components/Landing/Landing";
import { authTokenAtom, userDataAtom } from "./Atom";
import { useRecoilState } from "recoil";
import { Children, useEffect } from "react";
// import Footer from "./Components/Footer/Footer";
// import { Routes, Route } from "react-router-dom";
// import Register from "./Components/Register/Register";
// import Login from "./Components/Login/Login";
// import Landing from "./Components/Landing/Landing";
// import SearchResult from "./Components/SearchResult";
// import StudentDashboard from "./Components/DashBoard/StudentDashboard/StudentDashboard";
// import TutorDashboard from "./Components/DashBoard/TutorDashboard/TutorDashboard";
// import TutorProfile from "../src/TutorProfile/TutorProfile";
// import ReserveClass from "./ReserveClass";
// import NoResultPage from "../src/Components/NoResultPage";
// import NotFound from "../src/Components/NotFound";
// import AdminDashboard from "./Components/DashBoard/AdminDashboard/AdminDashboard";
// import TutorCompleteProfile from "./Components/TutorCompleteProfile/TutorCompleteProfile";
// import StudentCompleteProfile from "./Components/StudentCompleteProfile";

function App() {
  // const sessionToken = JSON.parse(sessionStorage.getItem("token"));
  // const sessionUser = JSON.parse(sessionStorage.getItem("user"));
  // const [authToken,setAuthToken]=useRecoilState(authTokenAtom);
  // const[userData,setUserData]=useRecoilState(userDataAtom);

  return (
    <>
      <NavComponent>
        <AllRoutes />
      </NavComponent>
    </>
  );
}

export default App;
