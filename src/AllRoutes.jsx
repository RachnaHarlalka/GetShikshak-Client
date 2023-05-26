import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Landing from "./Components/Landing/Landing";
import SearchResult from "./Components/SearchResult";
import StudentDashboard from "./Components/DashBoard/StudentDashboard/StudentDashboard";
import TutorDashboard from "./Components/DashBoard/TutorDashboard/TutorDashboard";
import TutorProfile from "../src/TutorProfile/TutorProfile";
import ReserveClass from "./ReserveClass";
import NoResultPage from "../src/Components/NoResultPage";
import NotFound from "../src/Components/NotFound";
import AdminDashboard from "./Components/DashBoard/AdminDashboard/AdminDashboard";
import TutorCompleteProfile from "./Components/TutorCompleteProfile/TutorCompleteProfile";
import StudentCompleteProfile from "./Components/StudentCompleteProfile";
import { useRecoilValue } from "recoil";
import { authTokenAtom, userDataAtom } from "./Atom";

function AllRoutes() {
  // const authToken =useRecoilValue(authTokenAtom);

  const authToken = useRecoilValue(authTokenAtom);
  const userData = useRecoilValue(userDataAtom);

  // console.log("authtoken wow", authToken,userData);
  return (
    <Routes>
      {authToken ? (
        <Route path="/login" element={<Landing />} />
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      {authToken ? (
        <Route path="/register" element={<Landing />} />
      ) : (
        <Route path="/register" element={<Register />} />
      )}
      <Route path="/" element={<Landing />} />
      <Route path="/search" element={<SearchResult />} />
      <Route path="/user/:id" element={<TutorProfile />} />

      {userData?.role === "student" ? (
        <Route path="/reserveclass/:id" element={<ReserveClass />} />
      ) : (
        <Route path="/reserveclass/:id" element={<Landing />} />
      )}

      {userData?.role === "tutor" && userData?.isProfileCompleted===false ? (
        <Route
          path="/tutorcompleteprofile"
          element={<TutorCompleteProfile />}
        />
      ) : (
        <Route path="/tutorcompleteprofile" element={<Landing />} />
      )}

      {userData?.role === "student" && userData?.isProfileCompleted===false ? (
        <Route
          path="/studentcompleteprofile"
          element={<StudentCompleteProfile />}
        />
      ) : (
        <Route path="/studentcompleteprofile" element={<Landing />} />
      )}

      <Route path="/noresult" element={<NoResultPage />} />
      <Route path="*" element={<NotFound />} />

      {authToken &&
        (userData?.role === "student" ? (
          <Route path="/dashboard" element={<StudentDashboard />} />
        ) : userData?.role === "tutor" ? (
          <Route path="/dashboard" element={<TutorDashboard />} />
        ) : userData?.role === "admin" ? (
          <Route path="/dashboard" element={<AdminDashboard />} />
        ) : (
          <Route path="/dashboard" element={<NoResultPage />} />

        ))}
    </Routes>
  );
}

export default AllRoutes;
