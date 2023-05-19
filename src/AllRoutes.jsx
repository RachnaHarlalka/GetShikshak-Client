import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Landing from "./Components/Landing/Landing";
import { useRecoilValue } from "recoil";
import TutorRegistrationForm from "./Components/TutorRegistrationForm/TutorRegistrationForm";
import SearchResult from "./Components/SearchResult";
import StudentDashboard from "./Components/DashBoard/StudentDashboard/StudentDashboard";
import TutorDashboard from "./Components/DashBoard/TutorDashboard/TutorDashboard";
import TutorProfile from "../src/TutorProfile/TutorProfile";
import ReserveClass from "./ReserveClass";
import NoResultPage from "../src/Components/NoResultPage";
import NotFound from "../src/Components/NotFound";
import AdminDashboard from "./Components/DashBoard/AdminDashboard/AdminDashboard";
// import TutorRegistrationForm from "../Components/TutorRegistrationForm/TutorRegistrationForm";

function AllRoutes() {
  // const authToken =useRecoilValue(authTokenAtom);

  const authToken = JSON.parse(sessionStorage.getItem("token"));
  const userData = JSON.parse(sessionStorage.getItem("user"));

  console.log("authtoken wow", authToken);
  return (
    <Routes>
      {authToken ? (
        <Route path="/login" element={<Landing />} />
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Landing />} />
      <Route path="/tutordashboard" element={<TutorDashboard />} />
      <Route path="/studentdasboard" element={<StudentDashboard />} />
      {/* <Route path='/searchPage' element={<SearchPage/>}/> */}
      <Route path="/search" element={<SearchResult />} />
      <Route path="/user/:id" element={<TutorProfile />} />
      {userData?.role === "student" ? (
        <Route path="/reserveclass/:id" element={<ReserveClass />} />
      ) : (
        <Route path="/reserveclass/:id" element={<Landing />} />
      )}
      {userData?.role === "tutor" ? (
        <Route path="/tutorCreation" element={<TutorRegistrationForm />} />
      ) : (
        <Route path="/tutorCreation" element={<Landing />} />
      )}
      <Route path="/noresult" element={<NoResultPage />} />
      <Route path="*" element={<NotFound />} />

      {userData?.role === "student" ? (
        <Route path="/dashboard" element={<StudentDashboard />} />
      ) : userData?.role === "tutor" ? (
        <Route path="/dashboard" element={<TutorDashboard />} />
      ) : (
        <Route path="/dashboard" element={<AdminDashboard />} />
      )}
    </Routes>
  );
}

export default AllRoutes;
